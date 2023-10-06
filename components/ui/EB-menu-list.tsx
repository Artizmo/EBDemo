'use client'

import { useState } from 'react'

type EBMenuListItem<T> = {
  label: String
  url: String
  categories?: T[]
}

type EBMenuListProps<T> = {
  list: T[]
}

type EBMenuListItemProps = {
  label: String
  url: String
  onNext: () => void
  onPrev: () => void
}

export function EBMenuListItem({ label, url, onNext }: EBMenuListItemProps) {
  return (
    <div>
      <span onClick={onNext}>menu item {label} - {url}</span>
    </div>
  )
}

export default function EBMenuList<T extends EBMenuListItem<T>>({ list }: EBMenuListProps<T>) {
  const [menu, setMenu] = useState<T[]>([])

  const handleOnNextClick = (item: T) => {
    console.log('bingo item', item)
    setMenu(menu => [...menu, item])
  }

  const handleOnPrevClick = () => {
    setMenu(menu => menu.slice(0, -1))
  }

  return (
    <div className="">
      <div onClick={handleOnPrevClick}>back</div>
      {list.map((item, i) => (
        <EBMenuListItem key={i} onNext={() => handleOnNextClick(item)} onPrev={handleOnPrevClick} label={item.label} url={item.url} />
      ))}
    </div>
  )
}