import { type Adapter, type AdapterType, BaseAdapter, System } from '@hermestv/adapter-core';
import Tizen23System from './Tizen23System';

export interface Options {
  window: Window;
  system?: System;
}

export default class Tizen23Adapter extends BaseAdapter implements Adapter {
  public system: System;

  // Minimum required Tizen version
  protected static readonly MIN_MAJOR_VERSION: number = 2;
  protected static readonly MIN_MINOR_VERSION: number = 2;

  protected window: Window;
  protected tizen: Tizen;
  protected webapis: Webapis;
  protected b2bapis: B2bapis;

  constructor(options: Options) {
    super();
    this.window = options.window;
    this.tizen = this.window.tizen;
    this.webapis = this.window.webapis;
    this.b2bapis = this.window.b2bapis;
    this.system = options.system ? options.system : new Tizen23System(window);
  }

  public init(): Promise<void> {
    return Promise.resolve();
  }

  /**
   * Checks if the Tizen version is greater than or equal to the minimum required version
   * @param userAgent The user agent string
   * @param minMajor Minimum required major version
   * @param minMinor Minimum required minor version
   * @returns True if the Tizen version meets the minimum requirements
   */
  protected static isTizenVersionSupported(userAgent: string, minMajor: number, minMinor: number): boolean {
    // Extract Tizen version from userAgent
    // According to https://developer.samsung.com/smarttv/develop/guides/fundamentals/retrieving-platform-information.html
    // Different formats exist for Tizen user agents:
    // - Mozilla/5.0 (SMART-TV; LINUX; Tizen 6.5) AppleWebKit/537.36 (KHTML, like Gecko) 85.0.4183.93/6.5 TV Safari/537.36
    // - Mozilla/5.0 (SMART-TV; Linux; Tizen 2.4.0) AppleWebkit/538.1 (KHTML, like Gecko) Version/2.4.0 TV Safari/538.1
    // - Mozilla/5.0 (SMART-TV; Linux; Tizen 2.2) AppleWebkit/538.1 (KHTML, like Gecko) SamsungBrowser/1.0 TV Safari/538.1

    // Case-insensitive matching for Linux and handle both upper and lower case format
    const tizenRegex = /Tizen\s+(\d+)\.(\d+)(?:\.(\d+))?/i;
    const match = userAgent.match(tizenRegex);

    if (!match) {
      return false; // If we can't determine the version, assume not supported
    }

    const majorVersion = parseInt(match[1], 10);
    const minorVersion = parseInt(match[2], 10);

    // Compare versions
    if (majorVersion > minMajor) {
      return true;
    } else if (majorVersion === minMajor && minorVersion >= minMinor) {
      return true;
    }

    return false;
  }

  public static isPlatformSupported(window: Window): boolean {
    if (!window.tizen) {
      return false;
    }

    return this.isTizenVersionSupported(window.navigator.userAgent, this.MIN_MAJOR_VERSION, this.MIN_MINOR_VERSION);
  }

  public getType(): AdapterType {
    return 'tizen';
  }
}
