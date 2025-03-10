import { createSystemAdapter, type SystemAdapter } from './system';
import { version } from '../package.json';

/**
 * Tizen platform adapter for HermesTV SDK
 */
export interface TizenAdapter {
  /**
   * Platform identifier
   */
  platform: string;

  /**
   * Version of the adapter
   */
  version: string;

  /**
   * System APIs
   */
  system: SystemAdapter;

  /**
   * Check if running on Tizen platform
   * @returns True if running on Tizen
   */
  isTizenPlatform(): boolean;
}

/**
 * Tizen platform adapter for HermesTV SDK
 * @namespace adapter
 */
const adapter: TizenAdapter = {
  /**
   * Platform identifier
   */
  platform: 'tizen',

  /**
   * Version of the adapter
   */
  version,

  /**
   * System APIs
   */
  system: createSystemAdapter(),

  /**
   * Check if running on Tizen platform
   * @returns True if running on Tizen
   */
  isTizenPlatform() {
    return typeof tizen !== 'undefined';
  },
};

export default adapter;

// Export individual modules for direct access
export { createSystemAdapter } from './system';

// Export types
// export * from './types';
