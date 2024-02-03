import {useEffect, useState} from "react";

/**
 * Этот хук меряет ширину экрана и мы будем его использовать для бургера
 */
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState(0);
  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize
};