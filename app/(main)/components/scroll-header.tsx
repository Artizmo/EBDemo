'use client'

import useScrollDirection from '@/components/hooks/useScrollDirection'

type ScrollHeaderProps = { children: React.ReactNode };

export default function ScrollHeader({ children }: ScrollHeaderProps)  {
  const scrollDirection = useScrollDirection()

  return (
    <div className={`w-full flex flex-1 md:hidden p-2 items-center justify-between 
      ${scrollDirection === 'up' 
      ? 'ease-in duration-400 fixed top-0 bg-white [&_.header-logo]:fill-black [&_.header-logo]:w-[80px] [&_.header-icon]:fill-black [&_.header-icon]:w-[18px]' 
      : 'ease-out duration-1000 absolute bg-transparent'}`}
    >
      {children}
    </div>
  )
}