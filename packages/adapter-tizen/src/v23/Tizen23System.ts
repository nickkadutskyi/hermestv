import { BaseSystemControl, SystemControl, ErrorCodes } from '@hermestv/adapter-core';

export default class Tizen23System extends BaseSystemControl implements SystemControl {
  protected window: Window;
  protected tizen: Tizen;
  protected webapis: Webapis;
  protected b2bapis: B2bapis;

  constructor(window: Window) {
    super();
    this.window = window;
    this.tizen = this.window.tizen;
    this.webapis = this.window.webapis;
    this.b2bapis = this.window.b2bapis;

    this.errorMappings['SecurityError'] = [
      ErrorCodes.INSUFFICIENT_PRIVILEGES,
      'Check if you have all the required privileges in the config.xml file.' +
        'Make sure you have: ' +
        '<tizen:privilege name="http://developer.samsung.com/privilege/b2bcontrol"/>',
    ];
  }
}
