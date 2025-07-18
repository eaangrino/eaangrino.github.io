import { useState, useEffect } from 'react';

interface UseRotatingTextProps {
  texts: string[];
  duration?: number;
}

export function useRotatingText({ texts, duration = 3000 }: UseRotatingTextProps) {
  const [ currentIndex, setCurrentIndex ] = useState(0);
  const [ isVisible, setIsVisible ] = useState(true);

  useEffect(() => {
    if (texts.length <= 1) return;

    const interval = setInterval(() => {
      // Fade out
      setIsVisible(false);

      // Change text after fade out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsVisible(true);
      }, 300);
    }, duration);

    return () => clearInterval(interval);
  }, [ texts, duration ]);

  return {
    currentText: texts[ currentIndex ],
    isVisible,
    currentIndex,
  };
} 