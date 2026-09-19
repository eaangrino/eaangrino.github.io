'use client';

import {useEffect, useState} from 'react';

export function useRotatingText(texts: string[], duration = 6000) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    if (texts.length <= 1) return;
    const interval = window.setInterval(() => {
      setVisible(false);
      window.setTimeout(() => {
        setIndex((value) => (value + 1) % texts.length);
        setVisible(true);
      }, 300);
    }, duration);
    return () => window.clearInterval(interval);
  }, [texts.length, duration]);
  return {currentText: texts[index] ?? '', isVisible: visible};
}
