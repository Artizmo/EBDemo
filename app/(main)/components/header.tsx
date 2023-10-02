import Link from 'next/link'
import Logo from '@/components/icons/logo'
import Searchbar from '@/app/(main)/components/searchbar'
import SearchIcon from '@/components/icons/search'
import MenuIcon from '@/components/icons/menu'
import BagIcon from '@/components/icons/bag'

export default function Header() {
  return (
    <section className="relative md:p-2 flex">
      <div className="w-full flex flex-1 md:hidden absolute p-2 items-center justify-between">
        <div className="flex-1 mx-4 my-0">
          <SearchIcon className="fill-white" />
        </div>
        <div className="flex justify-center md:hidden w-full relative p-2 items-center justify-between md:justify-normal">
          <Link href="/">
            <Logo className="fill-white w-[116px]" />
          </Link>
        </div>
        <div className="flex-1 mx-4 my-0">
          <BagIcon className="fill-white" />
        </div>
        <div className="flex-1 mx-4 my-0">
          <MenuIcon className="fill-white" />
        </div>
      </div>

      <div className="hidden md:flex w-full relative p-4 items-center justify-between md:justify-normal flex-1">
        <Link href="/">
          <Logo className="fill-white md:fill-black w-[116px]" />
        </Link>
      </div>
      <div className="hidden md:flex p-2 items-center flex-1">
        <Searchbar />
      </div>
      <div className="hidden md:flex p-2 w-[10%] items-center justify-end flex-1 mr-[2rem]">
        <Link href="/cart">
          <div className="flex">
            <BagIcon className="fill-teal w-[26px] mr-3" />
            <div className="flex flex-col leading-[normal]">
              <div className="text-[12px] font-semibold uppercase whitespace-nowrap">Shopping Bag</div>
              <div className="text-[12px] font-normal"><span className="text-black font-semibold">2</span> items</div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}