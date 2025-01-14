import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  // State to store the window width
  const [width, setWidth] = useState(0); // Start with 0 until client-side mount

  useEffect(() => {
    // Ensure window is defined (i.e., we are in the browser)
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };

      // Set the initial width
      handleResize();

      // Add event listener for resize
      window.addEventListener('resize', handleResize);

      // Cleanup the event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []); // Empty dependency array to only run on mount/unmount

  return width;
};

export default useWindowWidth;
