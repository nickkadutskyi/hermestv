import { Adapter } from '@hermestv/adapter-core';
import Tizen55Adapter from '../v55/Tizen55Adapter';

export default class Tizen60Adapter extends Tizen55Adapter implements Adapter {
  // Minimum required Tizen version
  protected static readonly MIN_MAJOR_VERSION: number = 6;
  protected static readonly MIN_MINOR_VERSION: number = 0;
}
