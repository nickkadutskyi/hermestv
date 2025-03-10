import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: {
        'hermestv-adapter-tizen': resolve(__dirname, 'src/index.ts'),
        filesystem: resolve(__dirname, 'src/filesystem.ts'),
        system: resolve(__dirname, 'src/filesystem.ts'),
      },
      name: 'HermesTVTizenAdapter',
      // the proper extensions will be added
      // fileName: (format, entryName) =>
      //   `${entryName}${format === 'es' ? '' : `.${format}`}.${format === 'es' ? 'js' : 'cjs'}`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {},
      },
    },
    sourcemap: true,
    // Generate minified output
    // minify: 'terser',
  },
  plugins: [
    dts({
      // Include type definitions in output
      include: 'src',
      // Output path for type definitions
      outDir: 'dist',
    }),
  ],
});
