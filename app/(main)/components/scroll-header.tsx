'use client'

import { usePathname } from 'next/navigation'
import { ROUTES } from '@/data/constants'
import useScrollDirection from '@/components/hooks/useScrollDirection'

type ScrollHeaderProps = { children: React.ReactNode };

export default function ScrollHeader({ children }: ScrollHeaderProps)  {
  const scrollDirection = useScrollDirection()
  const pathname = usePathname()
  const isHome = pathname === ROUTES.HOME

  return (
    <div className={`w-full flex ${isHome ? 'absolute bg-transparent': 'relative bg-[#fff]'} flex-1 md:hidden p-2 items-center justify-between
      ${isHome && scrollDirection === 'equal' ? 'ease-out duration-300 transition-colors bg-transparent' : 'bg-[#fff] z-[2] [&_.header-logo]:fill-black [&_.header-icon]:fill-black'} `}
    >
      {children}
    </div>
  )
}