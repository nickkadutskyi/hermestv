import { BaseSystem, System } from '@hermestv/adapter-core';

export default class Tizen23System extends BaseSystem implements System {
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
  }
}
