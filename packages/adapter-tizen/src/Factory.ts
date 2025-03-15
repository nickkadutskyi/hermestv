import Tizen24Adapter from './v24/Tizen24Adapter';
import Tizen23Adapter from './v23/Tizen23Adapter';
import { Adapter } from '@hermestv/adapter-core';
import Tizen40Adapter from './v40/Tizen40Adapter';
import Tizen50Adapter from './v50/Tizen50Adapter';
import Tizen55Adapter from './v55/Tizen55Adapter';
import Tizen60Adapter from './v60/Tizen60Adapter';
import Tizen65Adapter from './v65/Tizen65Adapter';
import Tizen70Adapter from './v70/Tizen70Adapter';
import Tizen80Adapter from './v80/Tizen80Adapter';

export default function createAdapter(window: Window): Adapter {
  const opts = { window };
  // Start from the latest version and go down to pick the most recent one
  const TizenVersions = [
    Tizen80Adapter,
    Tizen70Adapter,
    Tizen65Adapter,
    Tizen60Adapter,
    Tizen55Adapter,
    Tizen50Adapter,
    Tizen40Adapter,
    Tizen24Adapter,
    Tizen23Adapter,
  ];
  for (const TizenAdapter of TizenVersions) {
    if (TizenAdapter.isPlatformSupported(window)) {
      return new TizenAdapter(opts);
    }
  }
  throw new Error('No supported adapter found');
}
