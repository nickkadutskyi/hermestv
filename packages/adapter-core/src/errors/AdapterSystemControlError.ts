import AdapterError, { BaseErrorParams } from './AdapterError';

export default class AdapterSystemControlError extends AdapterError {
  constructor(params: BaseErrorParams, options?: ErrorOptions) {
    super(params, options);
    this.name = 'AdapterSystemControlError';

    // Preserve the stack trace but update the error name
    if (this.stack) {
      this.stack = this.stack.replace(/^AdapterError:/, `${this.name}:`);
    }
    Object.setPrototypeOf(this, AdapterSystemControlError.prototype);
  }
}
