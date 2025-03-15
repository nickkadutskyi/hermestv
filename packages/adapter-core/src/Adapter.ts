import MethodNotImplementedError from './errors/MethodNotImplementedError';
import { SystemControl } from './SystemControl';

export type AdapterType = 'tizen' | 'webos' | 'brightsign' | 'android' | 'firetv' | 'browser';

export interface Adapter {
  system: SystemControl;
  init(): Promise<void>;
  getType(): AdapterType;
}

export abstract class BaseAdapter implements Adapter {
  abstract readonly system: SystemControl;

  public abstract init(): Promise<void>;

  public static isPlatformSupported(_window: Window): boolean {
    throw new MethodNotImplementedError('isPlatformSupported');
  }

  public abstract getType(): AdapterType;
}
