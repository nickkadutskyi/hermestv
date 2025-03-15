// Start all Adapter Errors with 10
const PREFIX = '10';
enum ErrorCodes {
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
  // System Control errors start with 10
  SYSTEM_CONTROL_GET_SERIAL_NUMBER_ERROR = `${PREFIX}1001`,
  SYSTEM_CONTROL_GET_URL_LAUNCHER_ADDRESS_ERROR = `${PREFIX}1002`,
  SYSTEM_CONTROL_CAPTURE_SCREEN_ERROR = `${PREFIX}1003`,
}

export default ErrorCodes;
