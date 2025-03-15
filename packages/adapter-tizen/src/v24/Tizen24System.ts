import { SystemControl } from '@hermestv/adapter-core';
import Tizen23System from '../v23/Tizen23System';

export default class Tizen24System extends Tizen23System implements SystemControl {
  // Minimum required Tizen version
  protected static readonly MIN_MAJOR_VERSION = 2;
  protected static readonly MIN_MINOR_VERSION = 4;

  /**
   * @returns Serial number of the device
   */
  public getSerialNumber(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      try {
        const serialNumber = this.b2bapis.b2bcontrol.getSerialNumber();
        resolve(serialNumber);
      } catch (error) {
        reject(error);
        // reject(handleError(error as Error, 'get_serial_number_failed'));
      }
    });
  }

  /**
   * @returns URL in URL Launcher
   */
  public getURLLauncherAddress(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      try {
        const url = this.b2bapis.b2bcontrol.getURLLauncherAddress();
        resolve(url);
      } catch (error) {
        reject(error);
        // TODO: add proper error handling, and put it in shared package (core)
        // reject(handleError(error as Error, 'get_url_launcher_address_failed'));
      }
    });
  }

  /**
   * @returns Path to the captured screenshot
   */
  public captureScreen(): Promise<string> {
    return new Promise((resolve, reject) => {
      try {
        this.b2bapis.b2bcontrol.captureScreen(
          (path: string) => {
            resolve(path);
          },
          (error: Error) => {
            // TODO: add proper Tizen Webapi error type
            throw error;
          },
        );
      } catch (error) {
        // TODO: add proper error handling, and put it in shared package (core)
        reject(error);
      }
    });
  }
}
