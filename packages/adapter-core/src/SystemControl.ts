import MethodNotImplementedError from './errors/MethodNotImplementedError.ts';
import ErrorCodes from './errors/ErrorCodes.ts';
import { withErrorHandling } from './errors/methodWrappers.ts';
import AdapterSystemControlError from './errors/AdapterSystemControlError.ts';
import type { ErrorMapping } from './types.ts';

export interface SystemControl {
  getSerialNumber(): Promise<string>;
  getURLLauncherAddress(): Promise<string>;
  captureScreen(): Promise<string>;
}

// Only internal _* methods should be used in the implementation of the class
// so that we can handle errors in a consistent way
export abstract class BaseSystemControl implements SystemControl {
  protected errorMappings: ErrorMapping = {};

  public getSerialNumber(): Promise<string> {
    return withErrorHandling(
      () => this._getSerialNumber(),
      ErrorCodes.SYSTEM_CONTROL_GET_SERIAL_NUMBER_ERROR,
      AdapterSystemControlError,
      this.errorMappings,
    );
  }

  public getURLLauncherAddress(): Promise<string> {
    return withErrorHandling(
      () => this._getURLLauncherAddress(),
      ErrorCodes.SYSTEM_CONTROL_GET_URL_LAUNCHER_ADDRESS_ERROR,
      AdapterSystemControlError,
      this.errorMappings,
    );
  }

  public captureScreen(): Promise<string> {
    return withErrorHandling(
      () => this._captureScreen(),
      ErrorCodes.SYSTEM_CONTROL_CAPTURE_SCREEN_ERROR,
      AdapterSystemControlError,
      this.errorMappings,
    );
  }

  protected _getSerialNumber(): Promise<string> {
    throw new MethodNotImplementedError('_getSerialNumber');
  }

  protected _getURLLauncherAddress(): Promise<string> {
    throw new MethodNotImplementedError('_getURLLauncherAddress');
  }
  protected _captureScreen(): Promise<string> {
    throw new MethodNotImplementedError('_captureScreen');
  }
}
