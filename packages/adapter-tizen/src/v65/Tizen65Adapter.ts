import { Adapter } from '@hermestv/adapter-core';
import Tizen60Adapter from '../v60/Tizen60Adapter';

export default class Tizen65Adapter extends Tizen60Adapter implements Adapter {
  // Minimum required Tizen version
  protected static readonly MIN_MAJOR_VERSION: number = 6;
  protected static readonly MIN_MINOR_VERSION: number = 5;
}
