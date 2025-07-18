import { useState, useEffect } from 'react';

export function useTheme() {
  const [ isDarkMode, setIsDarkMode ] = useState(false);

  useEffect(() => {
    // Function to update theme state based on data-theme attribute
    const updateThemeState = () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      setIsDarkMode(currentTheme === 'dark');
    };

    // Check if theme is stored in localStorage
    const savedTheme = localStorage.getItem('theme');
    // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Set initial theme - default to dark mode if no saved theme
    const initialTheme = savedTheme || 'dark';
    setIsDarkMode(initialTheme === 'dark');

    // Apply theme to document
    document.documentElement.setAttribute('data-theme', initialTheme);

    // Listen for data-theme attribute changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          updateThemeState();
        }
      });
    });

    // Start observing the document element for data-theme changes
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: [ 'data-theme' ]
    });

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);

    // Update data-theme attribute
    document.documentElement.setAttribute('data-theme', newTheme);

    // Save to localStorage
    localStorage.setItem('theme', newTheme);
  };

  return { isDarkMode, toggleTheme };
} 