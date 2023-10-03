'use client'

import useScrollDirection from '@/components/hooks/useScrollDirection'

type ScrollHeaderProps = { children: React.ReactNode };

export default function ScrollHeader({ children }: ScrollHeaderProps)  {
  const scrollDirection = useScrollDirection()
//[&_.header-logo]:fill-black [&_.header-logo]:w-[80px] [&_.header-icon]:fill-black [&_.header-icon]:w-[18px]
  return (
    <div className={`w-full flex absolute flex-1 md:hidden p-2 items-center justify-between bg-transparent
      ${scrollDirection === 'equal' ? 'bg-transparent' : 'z-[2] ease-in duration-400 bg-white [&_.header-logo]:fill-black [&_.header-icon]:fill-black'} `}
    >
      {children}
    </div>
  )
}