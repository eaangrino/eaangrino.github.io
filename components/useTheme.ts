'use client';

import {useCallback, useEffect, useState} from 'react';

type Theme = 'light' | 'dark';

function readTheme(): Theme {
  return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const updateThemeState = () => setTheme(readTheme());

    updateThemeState();

    const observer = new MutationObserver((mutations) => {
      if (
        mutations.some(
          (mutation) => mutation.type === 'attributes' && mutation.attributeName === 'data-theme',
        )
      ) {
        updateThemeState();
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = useCallback(() => {
    const next: Theme = readTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    setTheme(next);
  }, []);

  return {isDarkMode: theme === 'dark', toggleTheme};
}
