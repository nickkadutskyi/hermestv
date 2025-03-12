import { MethodNotImplementedError } from './errors/index.ts';
import { System } from './System';

export default abstract class Adapter {
  abstract readonly system: System;

  public abstract init(): Promise<void>;

  public static supports(): boolean {
    throw new MethodNotImplementedError('supports');
  }
}
