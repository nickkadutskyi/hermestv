export class MethodNotImplementedError extends Error {
  constructor(name: string) {
    super(`${name} is not implemented in this adapter.`);
    Object.setPrototypeOf(this, MethodNotImplementedError.prototype);
  }
}
