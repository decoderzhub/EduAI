import { useEffect } from 'react';
import HumbleScroll from './humbleScroll';

export const useHumbleScroll = (options = {}) => {
  useEffect(() => {
    const defaultOptions = {
      prefix: "cdhs",
      enableCallback: true,
      repeat: false,
      mirror: true,
      threshold: 0.25,
      offset: {
        top: -64,
        bottom: -150,
      },
      ...options
    };

    try {
      const scroll = new HumbleScroll(defaultOptions, window, document);
      console.log('[HS Debug] HumbleScroll initialized successfully:', scroll);
      
      return () => {
        // Cleanup if needed
        console.log('[HS Debug] HumbleScroll cleanup');
      };
    } catch (e) {
      console.error('[HS Debug] Error initializing HumbleScroll:', e);
    }
  }, [options]);
};

export default useHumbleScroll;
