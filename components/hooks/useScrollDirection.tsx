import { useEffect, useState } from 'react';

export default function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<string>('equal');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      if (scrollY === 0) return setScrollDirection('equal')

      const direction: string = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 0 || scrollY - lastScrollY < -0)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    }
  }, [scrollDirection]);

  return scrollDirection;
};