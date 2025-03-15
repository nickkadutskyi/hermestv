import ErrorCodes from './ErrorCodes';

const ErrorMessages: Partial<Record<ErrorCodes, string>> = {
  [ErrorCodes.UNKNOWN_ERROR]: 'An unknown error occurred.',
};

export default ErrorMessages;
