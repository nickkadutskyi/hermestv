import ErrorCodes from './ErrorCodes';
import ErrorMessages from './ErrorMessages';
import ErrorDetails from './ErrorDetails';

export interface BaseErrorParams {
  code: ErrorCodes;
  message?: string;
  details?: string;
  cause?: Error;
}

export default class AdapterError extends Error {
  public code: ErrorCodes;
  public details?: string;

  constructor({ code, message, details }: BaseErrorParams, options?: ErrorOptions) {
    super(`[${code}] ${message || ErrorMessages[code] || ErrorMessages[ErrorCodes.UNKNOWN_ERROR]}`, options);
    this.name = 'AdapterError';
    if (options && options?.cause) {
      if (!('cause' in this)) {
        const cause = options?.cause;
        this.cause = cause;
      }
      let appendedMessage = '';
      if (this.cause instanceof Error) {
        appendedMessage = ` CAUSED BY ${this.cause.name || 'Unknown'}: ${this.cause.message || 'Unknown'}`;
        if (this.cause.stack) {
          this.stack = `${this.stack}\nCAUSE: ${this.cause.stack}`;
        }
      } else if (typeof this.cause === 'string') {
        appendedMessage = ` CAUSED BY ${this.cause}`;
      }
      this.message = `${this.message}${appendedMessage}`;
    }

    this.code = code;
    this.details = details || ErrorDetails[code] || undefined;

    Object.setPrototypeOf(this, AdapterError.prototype);
  }
}
