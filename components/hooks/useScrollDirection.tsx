import { useEffect, useState } from 'react'

export default function useScrollDirection(scrollerRef: HTMLInputElement | null) {
  const [scrollDirection, setScrollDirection] = useState<string>('equal')

  useEffect(() => {
    const { top = 0 } = scrollerRef?.getBoundingClientRect() ?? {}
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      if (scrollY === 0) return setScrollDirection('equal')
      if (scrollY >= top) setScrollDirection('down')
    }

    window.addEventListener("scroll", updateScrollDirection)
    return () => {
      window.removeEventListener("scroll", updateScrollDirection)
    }
  }, [scrollDirection])

  return scrollDirection
}