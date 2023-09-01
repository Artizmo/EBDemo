import Link from 'next/link'
import LogoIcon from '@/components/icons/logo'
import BagIcon from '@/components/icons/bag'
import AdventureIcon from '@/components/icons/adventure'

type baseProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>,HTMLInputElement>
type SearchBarProps = {
} & baseProps

function SearchBar({ ...props }: SearchBarProps) {
  return (
    <div className="flex items-center justify-center flex-1">
      <input placeholder="Lets find what you're looking for!" className="w-[30rem] h-10 p-2 rounded-[5px] border border-[#b6b6b6]" {...props} />
    </div>
  )
}

function Toolbar() {
  return (
    <div className="text-[14px]">
      LABOR DAY SALE - 50% OFF <b>VIEW OFFERS</b>
    </div>
  )
}

type LayoutProps = { children: React.ReactNode };

export default function HeaderLayout({ children }: LayoutProps) {
  return (
    <header className="flex flex-col">

      <section className="text-white bg-black p-2 flex">
        <div className="flex flex-1 ml-1 gap-x-2">
          <AdventureIcon className="w-[28px] mr-2" />
          <span className="text-[14px]">Earn Rewards On Purchases</span>
        </div>
        <div className="flex items-center justify-center flex-1 cursor-pointer">
          <Toolbar />
        </div>
        <div className="text-[14px] flex justify-end flex-1 gap-x-2 mr-1">
          <span className="cursor-pointer">Main Place (60565)</span>
          <span>|</span>
          <span className="cursor-pointer">Sign In!</span>
        </div>
      </section>

      <section className="p-4 flex">
        <div className="flex items-center flex-1">
          <Link href="/">
            <LogoIcon className="fill-black w-[120px] sm:w-[140px] ml-[2.5rem]" />
          </Link>
        </div>
        <div className="flex items-center flex-1">
          <SearchBar />
        </div>
        <div className="w-[10%] flex items-center justify-end flex-1 mr-10">
          <Link href="/cart">
            <div className="flex">
              <BagIcon className="fill-teal w-[32px] mr-3" />
              <div className="flex flex-col">
                <div className="text-[14px] font-semibold uppercase">Shopping Bag</div>
                <div className="text-[12px] font-normal uppercase">(2) items</div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <nav className="text-black font-medium uppercase text-[14px] p-2 flex justify-center gap-x-10 hover:[&>a]:shadow-[0_2px_0_0_teal]">
        <Link href="/products">new!</Link>
        <Link href="/products">women</Link>
        <Link href="/products">men</Link>
        <Link href="/products">kids</Link>
        <Link href="/products">outerwear</Link>
        <Link href="/products">gear</Link>
        <Link href="/products">shoes</Link>
        <Link href="/products">home</Link>
        <Link href="/products">sale</Link>
        <Link href="/products" className="text-red">clearance</Link>
        <Link href="/products">about us</Link>
      </nav>
      <>{children}</>
    </header>
  )
};
