import { Adapter } from '@hermestv/adapter-core';
import Tizen65Adapter from '../v65/Tizen65Adapter';

export default class Tizen70Adapter extends Tizen65Adapter implements Adapter {
  // Minimum required Tizen version
  protected static readonly MIN_MAJOR_VERSION: number = 7;
  protected static readonly MIN_MINOR_VERSION: number = 0;
}
