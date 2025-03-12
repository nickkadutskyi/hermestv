import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: {
        'hermestv-adapter-core': resolve(__dirname, 'src/index.ts'),
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
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].js',
      },
    },
    sourcemap: true,
  },
  plugins: [
    dts({
      // Include type definitions in output
      include: 'src',
      // Output path for type definitions
      outDir: 'dist',
      rollupTypes: true,
    }),
  ],
});
