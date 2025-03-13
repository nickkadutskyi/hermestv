import { MethodNotImplementedError } from './errors/index.ts';
import { System } from './System';

export type AdapterType = 'tizen' | 'webos' | 'brightsign' | 'android' | 'firetv' | 'browser';

export interface Adapter {
  system: System;
  init(): Promise<void>;
  getType(): AdapterType;
}

export abstract class BaseAdapter implements Adapter {
  abstract readonly system: System;

  public abstract init(): Promise<void>;

  public static isPlatformSupported(_window: Window): boolean {
    throw new MethodNotImplementedError('isPlatformSupported');
  }

  public abstract getType(): AdapterType;
}
