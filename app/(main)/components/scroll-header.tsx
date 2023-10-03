'use client'

import useScrollDirection from '@/components/hooks/useScrollDirection'

type ScrollHeaderProps = { children: React.ReactNode };

export default function ScrollHeader({ children }: ScrollHeaderProps)  {
  const scrollDirection = useScrollDirection()

  return (
    <div className={`w-full flex absolute flex-1 md:hidden p-2 items-center justify-between bg-transparent
      ${scrollDirection === 'equal' ? 'ease-in duration-300 bg-transparent' : 'z-[2] bg-white [&_.header-logo]:fill-black [&_.header-icon]:fill-black'} `}
    >
      {children}
    </div>
  )
}