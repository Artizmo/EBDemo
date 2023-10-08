'use client'

import { useMemo, useState } from 'react'
import MenuIcon from '@/components/icons/menu'
import CloseIcon from '@/components/icons/close'

type EBMenuListItem = {
  label: String
  url: String
  categories?: EBMenuListItem[]
}

type EBMenuListProps = {
  list: EBMenuListItem[]
}

type EBMenuListItemProps = {
  label: String
  url: String
  onNext: () => void
}

export function EBMenuListItem({ label, url, onNext }: EBMenuListItemProps) {
  return (
    <div>
      <button onClick={onNext} className="uppercase text-sm font-normal">{label}</button>
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
      {show ? (
        <section className="font-interstate shadow-[-4px_0px_4px_0px_#8a8a8a59] p-4 fixed bg-white min-w-[80%] flex flex-col right-0 inset-y-0">
          <header className="flex justify-between">
            <button onClick={handleOnPrevClick}>{menus.length > 1 ? 'back' : 'Eddie Bauer'}</button>
            <button onClick={handleOnClose}>
              <CloseIcon className="w-[24px]" />
            </button>
          </header>
          <section className="pt-8 flex flex-col gap-y-4">
            {menu?.map((item, i) => (
              <EBMenuListItem key={i} onNext={() => handleOnNextClick(item)} label={item.label} url={item.url} />
            ))}
          </section>
          <footer className="shadow-[0_-1px_0_0_#d6d6d6] mt-4 pt-4 flex flex-col gap-y-4 text-[14px]">
            <div>Account Profile</div>
            <div>Current Orders</div>
            <div>My Wishlist</div>
            <div>My Store</div>
            <div>Signout</div>
          </footer>
        </section>
      ) : (
        <button className="" onClick={() => setShow(true)}>
          <MenuIcon className="header-icon fill-white w-[18px]" />
        </button>
      )}
    </>
  )
}