import AdapterError from './errors/AdapterError';
import ErrorCodes from './errors/ErrorCodes';
import MethodNotImplementedError from './errors/MethodNotImplementedError';
import { withErrorHandlingSync } from './errors/methodWrappers';
import { SystemControl } from './SystemControl';
import type { ErrorMapping } from './types';

export type AdapterType = 'tizen' | 'webos' | 'brightsign' | 'android' | 'firetv' | 'browser';

export interface Adapter {
  system: SystemControl;
  init(): Promise<void>;
  getType(): AdapterType;
}

export abstract class BaseAdapter implements Adapter {
  protected static errorMappings: ErrorMapping = {};
  abstract readonly system: SystemControl;

  public abstract init(): Promise<void>;

  public static isPlatformSupported(window: Window): boolean {
    return withErrorHandlingSync(
      () => this._isPlatformSupported(window),
      ErrorCodes.PLATFORM_SUPPORT_CHECK,
      AdapterError,
      this.errorMappings,
    );
  }
  protected static _isPlatformSupported(_window: Window): boolean {
    throw new MethodNotImplementedError('isPlatformSupported');
  }

  public abstract getType(): AdapterType;
}
