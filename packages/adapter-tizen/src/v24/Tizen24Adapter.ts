import { Adapter, System } from '@hermestv/adapter-core';
import Tizen23Adapter, { Options } from '../v23/Tizen23Adapter';
import Tizen24System from './Tizen24System';

export default class Tizen24Adapter extends Tizen23Adapter implements Adapter {
  system: System;

  // Minimum required Tizen version
  protected static readonly MIN_MAJOR_VERSION: number = 2;
  protected static readonly MIN_MINOR_VERSION: number = 4;

  constructor(options: Options) {
    super(options);
    this.system = new Tizen24System();
  }
}
