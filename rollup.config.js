import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'dist/index.js',
  output: [
    {
      file: 'dist/smartdombundle.js',
      format: 'iife',
      name: 'smartdom',
    },
    {
      file: 'dist/smardombundle.min.js',
      format: 'iife',
      name: 'smartdom',
      plugins: [
        terser({
          safari10: true,
        }),
      ],
    },
  ],
  plugins: [
    typescript(),
    commonjs({
      extensions: ['.js', '.ts'],
    }),
  ],
};
