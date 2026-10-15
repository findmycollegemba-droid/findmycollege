/**
 * Universal CRM Lead Dispatcher & Real-Time Sync Utility
 * Perfect College / FindMyBSchool Admissions CRM
 */

const API_KEY = 'fmc_live_89b27a3c019d44e59f2a7e';
const RELATIVE_ENDPOINT = '/admin/api/leads';
const CLOUDFLARE_WORKER_ENDPOINT = 'https://crm-admin.findmycollege-mba.workers.dev/admin/api/leads';
const LOCAL_ENDPOINT = 'http://localhost:3000/admin/api/leads';

// Ordered list of ingestion endpoints with automatic failover
const ENDPOINTS = [
  RELATIVE_ENDPOINT,
  CLOUDFLARE_WORKER_ENDPOINT,
  LOCAL_ENDPOINT,
];

// Cross-tab real-time event channel
let liveBroadcastChannel = null;
try {
  if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
    liveBroadcastChannel = new BroadcastChannel('fmc_crm_live_channel');
  }
} catch (e) {
  // BroadcastChannel unavailable in some sandbox contexts
}

function getUtmParams() {
  if (typeof window === 'undefined') return {};
  const params = {};
  const searchParams = new URLSearchParams(window.location.search);
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach((k) => {
    if (searchParams.has(k)) params[k] = searchParams.get(k);
  });
  return params;
}

function detectDevice() {
  if (typeof navigator === 'undefined') return 'Desktop';
  const ua = navigator.userAgent || '';
  if (/ipad|tablet|(android(?!.*mobile))/i.test(ua)) return 'Tablet';
  if (/mobile|iphone|ipod|blackberry|opera mini|iemobile|wpdesktop/i.test(ua)) return 'Mobile';
  return 'Desktop';
}

/**
 * Sends a student lead to the Admissions CRM with automatic retries,
 * failover endpoints, and real-time tab notification.
 */
export async function sendLeadToCRM(leadData) {
  if (!leadData) return { success: false, error: 'No lead data provided' };

  const utms = getUtmParams();
  const device = detectDevice();

  const name = String(leadData.name || '').trim() || (leadData.email ? leadData.email.split('@')[0] : 'Aspirant');
  const email = String(leadData.email || '').trim().toLowerCase();
  const phone = String(leadData.phone || leadData.mobile || '').trim();
  const message = String(leadData.message || '').trim();
  const formName = leadData.form_name || leadData.formName || 'Website Inquiry';
  const source = leadData.source || 'Website Lead';

  const payload = {
    name,
    email,
    phone,
    message,
    form_name: formName,
    source,
    page_url: typeof window !== 'undefined' ? window.location.href : '',
    referrer: typeof document !== 'undefined' ? document.referrer || 'Direct Website' : 'Direct Website',
    device,
    utm_source: leadData.utm_source || utms.utm_source || '',
    utm_medium: leadData.utm_medium || utms.utm_medium || '',
    utm_campaign: leadData.utm_campaign || utms.utm_campaign || '',
    utm_term: leadData.utm_term || utms.utm_term || '',
    utm_content: leadData.utm_content || utms.utm_content || '',
    custom_fields: leadData.custom_fields || {},
  };

  const headers = {
    'Content-Type': 'application/json',
    'x-api-key': API_KEY,
  };

  let responseData = null;
  let sentSuccessfully = false;

  for (const endpoint of ENDPOINTS) {
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers,
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        responseData = await res.json();
        sentSuccessfully = true;
        break;
      } else {
        console.warn(`[CRM Sync] Endpoint ${endpoint} returned status ${res.status}`);
      }
    } catch (err) {
      console.warn(`[CRM Sync] Endpoint ${endpoint} unreachable:`, err?.message || err);
    }
  }

  // 3. Broadcast Real-time Ping to open CRM Admin Tabs
  try {
    const eventData = {
      type: 'NEW_LEAD',
      timestamp: Date.now(),
      leadName: name,
      leadSource: source,
      leadForm: formName,
    };

    if (liveBroadcastChannel) {
      liveBroadcastChannel.postMessage(eventData);
    }

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('fmc_crm_live_ping', JSON.stringify(eventData));
    }
  } catch (syncErr) {
    // Ignore cross-tab broadcast errors
  }

  return responseData || { success: sentSuccessfully };
}

// Bind to window for global access
if (typeof window !== 'undefined') {
  window.sendLeadToCRM = sendLeadToCRM;
}
