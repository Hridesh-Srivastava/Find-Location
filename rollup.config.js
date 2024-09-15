import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'index.js', 
  output: {
    file: 'dist/geo-spot-finder.js',
    format: 'esm', // ES module format
  },
  plugins: [resolve()],
};