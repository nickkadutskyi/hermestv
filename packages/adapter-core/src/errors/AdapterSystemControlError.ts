import AdapterError, { BaseErrorParams } from './AdapterError';

export default class AdapterSystemControlError extends AdapterError {
  constructor(params: BaseErrorParams, options?: ErrorOptions) {
    super(params, options);
    this.changeErrorName('AdapterSystemControlError');

    Object.setPrototypeOf(this, AdapterSystemControlError.prototype);
  }
}
