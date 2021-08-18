import { useEffect, useState } from 'react';

/**
 * Get the height of the viewport
 * @returns {Number} Viewport height
 */
const getViewportHeight = () => window.innerHeight;

/**
 * Hook that sets an event handler on resize to get viewport width
 * @returns {Number} Viewport height
 */
export default function useHeight() {
  const [viewportHeight, setViewportHeight] = useState();

  useEffect(() => {
    const screenResized = () => setViewportHeight(getViewportHeight());
    screenResized();

    //window.addEventListener('resize', screenResized);
    return () => window.removeEventListener('resize', screenResized);
  }, []);

  return viewportHeight;
}
