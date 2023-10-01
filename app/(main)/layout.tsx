import Link from 'next/link'
import Logo from '@/components/icons/logo'
import BagIcon from '@/components/icons/bag'
import AdventureIcon from '@/components/icons/adventure'

type SearchBarProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

function SearchBar({ ...props }: SearchBarProps) {
  return (
    <div className="flex items-center justify-center flex-1">
      <input placeholder="Let's find what you're looking for!" className="w-[30rem] h-10 p-2 rounded-[5px] border border-[#b6b6b6]" {...props} />
    </div>
  )
}

function Toolbar() {
  return (
    <div className="text-[12px]">
      30% OFF RAIN JACKETS & GEAR <b>VIEW OFFERS</b>
    </div>
  )
}

type LayoutProps = { children: React.ReactNode };

export default function HeaderLayout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col flex-1">
      <header className="flex flex-col shadow-[0_1px_0_0_#d6d6d6]">

        <section className="text-white bg-[#14686a] md:bg-black p-2 flex">
          <div className="hidden md:flex flex-1 ml-1 gap-x-2 cursor-pointer">
            <AdventureIcon className="w-[28px] mr-2" />
            <span className="text-[12px]">Earn Rewards On Purchases</span>
          </div>
          <div className="flex items-center justify-center flex-1 cursor-pointer">
            <Toolbar />
          </div>
          <div className="text-[12px] hidden md:flex justify-end flex-1 gap-x-2 mr-1">
            <span className="cursor-pointer">Main Place (60565)</span>
            <span>|</span>
            <span className="cursor-pointer">Sign In!</span>
          </div>
        </section>

        <section className="md:hidden p-2">
          <div className="p-2 flex items-center flex-1">
            <Link href="/">
              <Logo className="fill-black w-[116px]" />
            </Link>
          </div>
        </section>

        <section className="hidden md:flex p-2">
          <div className="p-2 flex items-center flex-1">
            <Link href="/">
              <Logo className="fill-black w-[116px]" />
            </Link>
          </div>
          <div className="p-2 flex items-center flex-1">
            <SearchBar />
          </div>
          <div className="p-2 w-[10%] flex items-center justify-end flex-1 mr-[2rem]">
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

        <nav className="hidden md:flex bg-light-gray p-2 text-black font-medium uppercase text-[14px] justify-center gap-x-10 hover:[&>a]:shadow-[0_4px_0_0_teal]">
          <Link href="/products">women</Link>
          <Link href="/products">men</Link>
          <Link href="/products">outerwear</Link>
          <Link href="/products">kids</Link>
          <Link href="/products">gear & home</Link>
          <Link href="/products" className="text-red">clearance & sale</Link>
          <Link href="/products">about us</Link>
        </nav>
      </header>
      <div className="flex-col flex-1 items-center">{children}</div>
    </div>
  )
};
