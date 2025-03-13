import { Adapter } from '@hermestv/adapter-core';
import Tizen30Adapter from '../v30/Tizen30Adapter';

export default class Tizen40Adapter extends Tizen30Adapter implements Adapter {
  // Minimum required Tizen version
  protected static readonly MIN_MAJOR_VERSION: number = 4;
  protected static readonly MIN_MINOR_VERSION: number = 0;
}
