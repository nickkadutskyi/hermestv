import ErrorCodes from './ErrorCodes';

const ErrorMessages: Partial<Record<ErrorCodes, string>> = {
  [ErrorCodes.UNKNOWN_ERROR]: 'An unknown error occurred.',
  [ErrorCodes.INSUFFICIENT_PRIVILEGES]: 'Insufficient privileges to perform this action.',
  [ErrorCodes.PLATFORM_SUPPORT_CHECK]: 'Platform support check failed.',

  [ErrorCodes.SYSTEM_CONTROL_GET_SERIAL_NUMBER_ERROR]: 'Failed to get the serial number.',
  [ErrorCodes.SYSTEM_CONTROL_GET_URL_LAUNCHER_ADDRESS_ERROR]: 'Failed to get the URL launcher address.',
  [ErrorCodes.SYSTEM_CONTROL_CAPTURE_SCREEN_ERROR]: 'Failed to capture the screen.',
};

export default ErrorMessages;
