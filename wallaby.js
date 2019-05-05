function config(wallaby) {

  process.env.NODE_ENV = 'development';

  return {
    files: [
      'src/**/*.ts',
      '!src/**/*test.ts',
    ],
    tests: [
      'src/**/*test.ts',
    ],
    env: {
      type: 'node',
    },
  }
}

module.exports = config;