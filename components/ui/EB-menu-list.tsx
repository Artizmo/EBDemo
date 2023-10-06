'use client'

import { useMemo, useState } from 'react'

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
      <span onClick={onNext}>menu item {label} - {url}</span>
    </div>
  )
}

export default function EBMenuList({ list }: EBMenuListProps) {
  // const [previousMenu, setPrevMenu] = useState<T[]>(list)
  // const [currentMenu, setCurrentMenu] = useState<T[]>(list)
  const [menus, setMenus] = useState([list])
  const menu = useMemo(() => menus.at(-1), [menus])

  console.log('bingo menus', menus)

  const handleOnNextClick = (item: any) => {
    if (item?.categories) {
      console.log('bingo item', item)
      setMenus(menus => [...menus, item.categories])
    }
  }

  const handleOnPrevClick = () => {
    if (menus.length === 1) return
    
    console.log('bingo prev', menus.slice(0, -1))
    setMenus(menus.slice(0, -1))
  }

  return (
    <div className="">
      <div onClick={handleOnPrevClick}>back</div>
      {menu?.map((item, i) => (
        <EBMenuListItem key={i} onNext={() => handleOnNextClick(item)} label={item.label} url={item.url} />
      ))}
    </div>
  )
}