import { Adapter } from '@hermestv/adapter-core';
import Tizen24Adapter from '../v24/Tizen24Adapter';

export default class Tizen30Adapter extends Tizen24Adapter implements Adapter {
  // Minimum required Tizen version
  protected static readonly MIN_MAJOR_VERSION: number = 3;
  protected static readonly MIN_MINOR_VERSION: number = 0;
}
