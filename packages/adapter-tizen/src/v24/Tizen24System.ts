import { System } from '@hermestv/adapter-core';
import Tizen23System from '../v23/Tizen23System';

export default class Tizen24System extends Tizen23System implements System {
  // Minimum required Tizen version
  protected static readonly MIN_MAJOR_VERSION = 2;
  protected static readonly MIN_MINOR_VERSION = 4;

  /**
   * @returns Serial number of the device
   */
  public getSerialNumber(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      try {
        const serialNumber = b2bapis.b2bcontrol.getSerialNumber();
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
        const url = b2bapis.b2bcontrol.getURLLauncherAddress();
        resolve(url);
      } catch (error) {
        reject(error);
        // TODO: add proper error handling, and put it in shared package (core)
        // reject(handleError(error as Error, 'get_url_launcher_address_failed'));
      }
    });
  }
}
