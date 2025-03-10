/**
 * System adapter interface
 */
export interface SystemAdapter {
  /**
   * Gets the device serial number
   * @returns Serial number as a string
   */
  getSerialNumber(): Promise<string>;

  /**
   * Gets the URL in the URL Launcher
   * @returns URL as a string
   */
  getURLLauncherAddress(): Promise<string>;
}

/**
 * Creates a Tizen system adapter
 * @returns System operations object
 */
export function createSystemAdapter(): SystemAdapter {
  /**
   * @returns Serial number of the device
   */
  async function getSerialNumber(): Promise<string> {
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
  async function getURLLauncherAddress(): Promise<string> {
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

  // Return the filesystem adapter object with proper typing
  return {
    getSerialNumber,
    getURLLauncherAddress,
  };
}

// Export as default
export default createSystemAdapter();
