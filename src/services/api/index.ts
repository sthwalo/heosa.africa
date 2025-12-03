/**
 * Central export for all API services
 * Import services from here: import { finalistsService } from '@/services';
 */

import * as finalistsService from './finalists.service';
import * as galleryService from './gallery.service';
import * as votingService from './voting.service';

export { finalistsService, galleryService, votingService };

// Also export individual functions for convenience
export * from './finalists.service';
export * from './gallery.service';
export * from './voting.service';
export * from './events.service';
export * from './config';
