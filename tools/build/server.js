const path = require('path');

const globalConfig = require('./global');
const tsconfig = require('../../tsconfig.json');

const ROOT = path.resolve(__dirname, '../..');

module.exports = (...args) => ({
  ...globalConfig(...args),
  name: 'Server',
  target: 'node',
  entry: path.join(ROOT, 'src/server/index.ts'),
  output: {
    path: path.join(ROOT, tsconfig.compilerOptions.outDir),
    filename: 'server.js',
  },
  module: {
    rules: [{
      test: /\.ts$/,
      exclude: /node_modules/,
      use: ['babel-loader', 'ts-loader'],
    }],
  },
});
