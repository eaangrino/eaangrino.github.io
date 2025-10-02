const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "jsdom",
  transform: {
    ...tsJestTransformCfg,
  },
  moduleFileExtensions: [ "ts", "tsx", "js", "jsx", "json", "node" ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^.+\\.(css|scss|sass|less)$": "identity-obj-proxy",
    "^.+\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js"
  },
  setupFilesAfterEnv: [ "<rootDir>/jest.setup.js" ],
  testMatch: [ "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)" ],
  extensionsToTreatAsEsm: [ ".ts", ".tsx" ],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json'
    }
  },
};