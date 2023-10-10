'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import MenuIcon from '@/components/icons/menu'
import CloseIcon from '@/components/icons/close'
import UserCogIcon from '@/components/icons/user-cog'
import ListCheckIcon from '@/components/icons/list-check'
import HeartIcon from '@/components/icons/heart'
import PinIcon from '@/components/icons/pin'
import DoorIcon from '@/components/icons/door'
import ArrowRightIcon from '@/components/icons/arrow-right'

type EBMenuListItem = {
  label: String
  url: String
  categories?: EBMenuListItem[]
}

type EBMenuListProps = {
  list: EBMenuListItem[]
}

type EBMenuListItemProps = {
  className: String
  label: String
  url: String
  onNext: () => void
  onClose: () => void
}

export function EBMenuListItem({ className, label, url, onNext, onClose }: EBMenuListItemProps) {

  if (url.length) {
    return <Link href="/products" onClick={onClose} className={`${className} leading-[24px] uppercase text-sm font-normal`}>{label}</Link>
  }

  return (
    <div className={`${className}`}>
      <button onClick={onNext} className="justify-between items-center w-full flex text-left uppercase text-sm font-normal">
        <span>{label}</span>
        <ArrowRightIcon className="w-[24px]" />
      </button>
    </div>
  )
}

export default function EBMenuList({ list }: EBMenuListProps) {
  const [menus, setMenus] = useState<EBMenuListItem[][]>([list])
  const [show, setShow] = useState(false)
  
  const menu = useMemo(() => {
    const nextMenu = menus.at(-1) ?? []
    return nextMenu
  }, [menus])

  const handleOnNextClick = (item: EBMenuListItem) => {
    if (item?.categories) {
      setMenus([...menus, item.categories])
    }
  }

  const handleOnPrevClick = () => {
    if (menus.length === 1) return

    setMenus(menus => menus.slice(0, -1))
  }

  const handleOnClose = () => {
    setShow(false)
    setMenus([list])
  }

  return (
    <>
      {show && <div onClick={handleOnClose} className="bg-[#00000055] fixed inset-0" />}
      <section className={`${!show ? 'translate-x-full' : 'shadow-[-4px_0px_4px_0px_#24212159]'} transition-transform duration-[0.6s] ease-[cubic-bezier(0,0.67,0.58,1)] 
      font-interstate p-4 fixed bg-white min-w-[85%] flex flex-col right-0 inset-y-0`}>
        <header className="flex justify-between font-light">
          <button className="uppercase text-[14px]" onClick={handleOnPrevClick}>{menus.length > 1 ? 'back' : 'Welcome, Han Solo'}</button>
          <button onClick={handleOnClose}>
            <CloseIcon className="w-[24px]" />
          </button>
        </header>
        <section className="pt-8 flex flex-col">
          {menu?.map((item, i) => (
            <EBMenuListItem className="h-8 mt-2 pb-2 border-b-[#d6d6d6] border-b border-solid" key={i} onNext={() => handleOnNextClick(item)} onClose={handleOnClose} label={item.label} url={item.url} />
          ))}
        </section>
        <footer className="font-light mt-4 pt-2 flex flex-col gap-y-4 text-[14px]">
          <div className="flex items-center gap-x-4">
            <UserCogIcon className="w-5" />
            <span>Profile settings</span>
          </div>
          <div className="flex items-center gap-x-4">
            <ListCheckIcon className="w-5" />
            <span>Track my order</span>
          </div>
          <div className="flex items-center gap-x-4">
            <HeartIcon className="w-5" />
            <span>My wishlist</span>
          </div>
          <div className="flex items-center gap-x-4">
            <PinIcon className="w-5" />
            <span>My store</span>
          </div>
          <div className="flex items-center gap-x-4">
            <DoorIcon className="w-5" />
            <span>Sign out</span>
          </div>
        </footer>
      </section>
      <button className="" onClick={() => setShow(true)}>
        <MenuIcon className="header-icon fill-white w-[18px]" />
      </button>
    </>
  )
}