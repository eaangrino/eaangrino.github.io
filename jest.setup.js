const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

require('@testing-library/jest-dom');

// Mock i18n for react-i18next
jest.mock('react-i18next', () => ({
  ...jest.requireActual('react-i18next'),
  useTranslation: () => ({ t: (key) => key, i18n: { changeLanguage: () => new Promise(() => { }) } }),
}));