'use client'

import { useState } from 'react'
import MenuIcon from '@/components/icons/menu'
import EBMenu from '@/components/ui/EB-menu'

type NavbarMenuProps = {
  children: React.ReactElement
}

export default function NavbarMenu({ children }: NavbarMenuProps) {
  const [show, setShow] = useState(false)

  const handleOnClick = () => {
    setShow(show => !show)
  }

  const handleOnClose = () => {
    setShow(show => !show)
  }

  return (
    <>
      <button className="" onClick={handleOnClick}>
        <MenuIcon className="header-icon fill-white w-[18px]" />
      </button>
      <EBMenu show={show} onClose={handleOnClose}>
        {children}
      </EBMenu>
    </>
  )
}