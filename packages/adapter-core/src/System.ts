import { MethodNotImplementedError } from './errors';

export interface System {
  getSerialNumber(): Promise<string>;
  getURLLauncherAddress(): Promise<string>;
}
export abstract class BaseSystem implements System {
  getSerialNumber(): Promise<string> {
    throw new MethodNotImplementedError('getSerialNumber');
  }
  getURLLauncherAddress(): Promise<string> {
    throw new MethodNotImplementedError('getURLLauncherAddress');
  }
}
