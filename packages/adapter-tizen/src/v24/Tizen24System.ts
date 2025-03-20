import Tizen23System from '../v23/Tizen23System';

export default class Tizen24System extends Tizen23System {
  // Minimum required Tizen version
  protected static readonly MIN_MAJOR_VERSION = 2;
  protected static readonly MIN_MINOR_VERSION = 4;

  /**
   * @returns Serial number of the device
   */
  protected _getSerialNumber(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      try {
        const serialNumber = this.b2bapis.b2bcontrol.getSerialNumber();
        resolve(serialNumber);
      } catch (error) {
        console.log('Error getting serial number:', error);
        const err = new Error('Error getting serial number');
        console.log('Error: ', typeof error, error instanceof Error, error instanceof window.b2bapis.B2bAPIException);
        console.log('Err: ', typeof err, err instanceof Error);
        if (error instanceof Error) {
          // console.log('Error code:', error.code);
          console.log('Error message:', error.message);
          console.log('Error name:', error.name);
        }
        reject(error);
      }
    });
  }

  /**
   * @returns URL in URL Launcher
   */
  protected _getURLLauncherAddress(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      try {
        const url = this.b2bapis.b2bcontrol.getURLLauncherAddress();
        resolve(url);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * @returns Path to the captured screenshot
   */
  protected _captureScreen(): Promise<string> {
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
        reject(error);
      }
    });
  }
}
