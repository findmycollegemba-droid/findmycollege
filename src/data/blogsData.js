/**
 * FindMyBSchool Editorial & Admissions Playbooks Data Store
 *
 * Combines:
 * 1. CAT Percentile Series (70 %ile, 80 %ile, 90 %ile)
 * 2. Non-CAT & Speed Exams Series (National, Jaipur, Dehradun, Pune)
 * 3. Admissions Master Blueprints & Strategy (2027-29 Dates/Process, CAT vs XAT vs CMAT vs MAT, PGDM vs MBA)
 * 4. Regional Master Guides (Jaipur & Dehradun City Series)
 */

import { CAT_PERCENTILE_BLOGS } from './blogs/catPercentileBlogs.js';
import { NON_CAT_BLOGS } from './blogs/nonCatBlogs.js';
import { ADMISSIONS_STRATEGY_BLOGS } from './blogs/admissionsAndStrategyBlogs.js';
import { REGIONAL_SERIES_BLOGS } from './blogs/regionalSeriesBlogs.js';
import { DELHI_NCR_BLOGS } from './blogs/delhiNcrBlogs.js';
import { ADMIT_CARD_BLOGS } from './blogs/admitCardBlogs.js';

export const BLOGS_DATA = [
  // Live Exam Admit Card & Hall Ticket Guides
  ...ADMIT_CARD_BLOGS,

  // Delhi-NCR Flagship Masterclasses
  ...DELHI_NCR_BLOGS,

  // 10 Core 2027-29 Editorial Masterclasses
  ...CAT_PERCENTILE_BLOGS,
  ...NON_CAT_BLOGS,
  ...ADMISSIONS_STRATEGY_BLOGS,

  // Regional City Series (Jaipur & Dehradun)
  ...REGIONAL_SERIES_BLOGS
];

