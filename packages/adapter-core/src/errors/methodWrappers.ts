import { ErrorMapping } from '../types';
import AdapterError, { BaseErrorParams } from './AdapterError';
import ErrorCodes from './ErrorCodes';
import ErrorMessages from './ErrorMessages';

type ErrorConstructor = new (params: BaseErrorParams, options: ErrorOptions) => AdapterError;

export function withErrorHandling<T>(
  method: () => T | Promise<T>,
  errorCode: ErrorCodes,
  ErrorClass: ErrorConstructor = AdapterError,
  platformErrorMappings?: ErrorMapping,
  errorMessage?: string,
): Promise<T> {
  try {
    // Handle both synchronous returns and promises
    const result = method();

    // If it's a Promise, attach error handling
    if (result instanceof Promise) {
      return result.catch((error: Error) => {
        // Create and throw standardized error
        throw createStandardizedError(error, errorCode, ErrorClass, platformErrorMappings, errorMessage);
      });
    }

    // If not a promise, just return the result wrapped in a resolved promise
    return Promise.resolve(result);
  } catch (error) {
    // This catches synchronous errors
    return Promise.reject(createStandardizedError(error, errorCode, ErrorClass, platformErrorMappings, errorMessage));
  }
}

// Helper function to create standardized error objects
function createStandardizedError(
  error: unknown,
  errorCode: ErrorCodes = ErrorCodes.UNKNOWN_ERROR,
  ErrorClass: ErrorConstructor,
  platformErrorMappings?: ErrorMapping,
  errorMessage?: string,
): AdapterError {
  let code = errorCode;
  // Get main message based on the original error code
  const message = errorMessage || ErrorMessages[errorCode] || ErrorMessages[ErrorCodes.UNKNOWN_ERROR];
  let cause: Error | string | undefined;

  if (error instanceof Error) {
    cause = error;

    // If platform maps to a more specific error code, use that but keep original message
    if (platformErrorMappings && error.name in platformErrorMappings) {
      code = platformErrorMappings[error.name];
    }
  } else if (typeof error === 'string') {
    cause = error;
  }

  return new ErrorClass(
    {
      code,
      message,
    },
    { cause },
  );
}
