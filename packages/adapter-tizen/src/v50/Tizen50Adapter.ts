import { Adapter } from '@hermestv/adapter-core';
import Tizen40Adapter from '../v40/Tizen40Adapter';

export default class Tizen50Adapter extends Tizen40Adapter implements Adapter {
  // Minimum required Tizen version
  protected static readonly MIN_MAJOR_VERSION: number = 5;
  protected static readonly MIN_MINOR_VERSION: number = 0;
}
