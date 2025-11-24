import { useState, useEffect } from 'react';

export const useMediaQuery = (query: string): boolean => {
  // Initialize with the actual value immediately
  const [matches, setMatches] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    const media = window.matchMedia(query);

    // Update in case it changed
    setMatches(media.matches);

    // Create listener
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);

    // Add listener
    media.addEventListener('change', listener);

    // Cleanup
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
};
