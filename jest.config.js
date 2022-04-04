const alias = require('alias-reuse');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    ...alias(__dirname)
      .fromTsconfig()
      .toJest(),
    '(.*).svg$': '<rootDir>/tools/test/void',
  },
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
};
