'use client'

import { usePathname } from 'next/navigation'
import { useRef } from 'react'
import { ROUTES } from '@/data/constants'
import useScrollDirection from '@/components/hooks/useScrollDirection'

type ScrollHeaderProps = { children: React.ReactNode }

export default function NavbarScroller({ children }: ScrollHeaderProps)  {
  const scrollerRef = useRef<HTMLInputElement | null>(null)
  const scrollDirection = useScrollDirection(scrollerRef.current)
  const pathname = usePathname()
  const isHome = pathname === ROUTES.HOME

  return (
    <div ref={scrollerRef} className={`w-full flex ${isHome ? 'absolute bg-transparent': 'relative bg-white'} flex-1 md:hidden p-2 items-center justify-between
      ${isHome && scrollDirection === 'equal' 
        ? 'ease-out duration-300 transition-colors bg-transparent' 
        : 'bg-white z-[2] [&_svg]:fill-black'
      }`}
    >
      {children}
    </div>
  )
}