import nextJest from 'next/jest.js';
const createJestConfig = nextJest({dir: './'});
const config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {'^@/(.*)$': '<rootDir>/$1'},
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
};
export default createJestConfig(config);
