import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: {
        'hermestv-adapter-tizen': resolve(__dirname, 'src/index.ts'),
      },
      name: 'HermesTVAdapterTizen',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {},
        preserveModulesRoot: 'src',
      },
    },
    sourcemap: true,
  },
  plugins: [
    dts({
      // Include type definitions in output
      include: ['src', 'node_modules/@hermestv/adapter-core/dist'],
      // Output path for type definitions
      outDir: 'dist',
      rollupTypes: true,
    }),
  ],
});
