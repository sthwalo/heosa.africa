/**
 * Data exports - Centralized data access
 */

// Award categories and scoring
export {
  AWARD_CATEGORIES,
  SCORE_METRICS,
  REQUIRED_DOCUMENTS,
  getVotedCategories,
  getHonoraryCategories,
  getCategoryById,
  getCategoryByTitle,
  type AwardCategory
} from './awardCategories';

// Finalists data
export { finalists25Data, type Finalist } from './finalists25';

// Historical finalists
export { finalistsData } from './finalistsData';

// Winners data
export { winnersData, type Winner } from './winnersData';

// Gallery data
export { GALLERY_IMAGES, type GalleryImage } from './galleryData';

// Timeline data
export {
  homeTimelineData,
  awardsTimelineData,
  finalistsTimelineData,
  winnersTimelineData,
  awardsEventDetails,
  accommodationInfo
} from './timelineData';