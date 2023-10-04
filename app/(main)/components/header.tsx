import dynamic from 'next/dynamic'
import Link from 'next/link'
import Logo from '@/components/icons/logo'
import Searchbar from '@/app/(main)/components/searchbar'
import SearchIcon from '@/components/icons/search'
import MenuIcon from '@/components/icons/menu'
import BagIcon from '@/components/icons/bag'
// import ScrollHeader from '@/app/(main)/components/scroll-header'

const ScrollHeader = dynamic(() => import('@/app/(main)/components/scroll-header'))

export default function Header() {
  return (
    <div className="sticky md:relative top-0 z-[1] md:shadow-[unset] shadow-[0px_1px_4px_#00000044]">
      <section className="md:p-2 flex">
        <ScrollHeader>
          <div className="flex md:hidden w-full relative p-2 items-center md:justify-normal">
            <Link href="/">
              <Logo className="header-logo fill-white w-[110px]" />
            </Link>
          </div>
          <div className="mx-3 my-0">
            <SearchIcon className="header-icon fill-white w-[18px]" />
          </div>
          <div className="mx-3 my-0">
            <BagIcon className="header-icon fill-white w-[18px]" />
          </div>
          <div className="mx-3 my-0">
            <MenuIcon className="header-icon fill-white w-[18px]" />
          </div>
        </ScrollHeader>
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
    </div>
  )
}