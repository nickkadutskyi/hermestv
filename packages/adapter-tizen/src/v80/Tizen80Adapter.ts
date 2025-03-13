import { Adapter } from '@hermestv/adapter-core';
import Tizen70Adapter from '../v70/Tizen70Adapter';

export default class Tizen80Adapter extends Tizen70Adapter implements Adapter {
  // Minimum required Tizen version
  protected static readonly MIN_MAJOR_VERSION: number = 8;
  protected static readonly MIN_MINOR_VERSION: number = 0;
}
