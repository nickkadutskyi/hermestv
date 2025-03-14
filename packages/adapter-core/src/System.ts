import { MethodNotImplementedError } from './errors/index.ts';

export interface System {
  getSerialNumber(): Promise<string>;
  getURLLauncherAddress(): Promise<string>;
  captureScreen(): Promise<string>;
}
export abstract class BaseSystem implements System {
  getSerialNumber(): Promise<string> {
    throw new MethodNotImplementedError('getSerialNumber');
  }
  getURLLauncherAddress(): Promise<string> {
    throw new MethodNotImplementedError('getURLLauncherAddress');
  }
  captureScreen(): Promise<string> {
    throw new MethodNotImplementedError('captureScreen');
  }
}
