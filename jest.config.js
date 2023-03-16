// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest');
const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: [
    '<rootDir>/public/',
    '<rootDir>/node_modules/',
  ],
  moduleNameMapper: {
  },
  testEnvironment: 'jsdom',
  coverageReporters: ['text', 'clover', 'lcov', 'json-summary'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
  ],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 100,
      functions: 75,
      lines: 85,
    },
  },
};

module.exports = createJestConfig(customJestConfig);
