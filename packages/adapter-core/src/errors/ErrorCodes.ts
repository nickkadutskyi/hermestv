// Start all Adapter Errors with 10
const PRE = '10';
// General errors start with 00
const PRE_GEN = '00';
// System Control errors start with 10
const PRE_SYS = '10';
enum ErrorCodes {
  UNKNOWN_ERROR = `${PRE}${PRE_GEN}00`,
  INSUFFICIENT_PRIVILEGES = `${PRE}${PRE_GEN}01`,
  PLATFORM_SUPPORT_CHECK = `${PRE}${PRE_GEN}02`,

  SYSTEM_CONTROL_GET_SERIAL_NUMBER_ERROR = `${PRE}${PRE_SYS}01`,
  SYSTEM_CONTROL_GET_URL_LAUNCHER_ADDRESS_ERROR = `${PRE}${PRE_SYS}02`,
  SYSTEM_CONTROL_CAPTURE_SCREEN_ERROR = `${PRE}${PRE_SYS}03`,
}

export default ErrorCodes;
