import { Adapter } from '@hermestv/adapter-core';
import Tizen50Adapter from '../v50/Tizen50Adapter';

export default class Tizen55Adapter extends Tizen50Adapter implements Adapter {
  // Minimum required Tizen version
  protected static readonly MIN_MAJOR_VERSION: number = 5;
  protected static readonly MIN_MINOR_VERSION: number = 5;
}
