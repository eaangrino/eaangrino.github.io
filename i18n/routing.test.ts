import {defaultLocale, locales} from './config';

describe('routing configuration', () => {
  it('exports Spanish and English with Spanish as default', () => {
    expect(locales).toEqual(['es', 'en']);
    expect(defaultLocale).toBe('es');
  });
});
