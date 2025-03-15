export default class MethodNotImplementedError extends Error {
  constructor(name: string) {
    super(`${name} is not implemented in this adapter.`);
    this.name = 'MethodNotImplementedError';
    Object.setPrototypeOf(this, MethodNotImplementedError.prototype);
  }
}
