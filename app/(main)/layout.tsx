import Banner from '@/app/(main)/components/banner'
import Header from '@/app/(main)/components/header'
import Navbar from '@/app/(main)/components/navbar'

type LayoutProps = { children: React.ReactNode };

export default function HeaderLayout({ children }: LayoutProps) {
  return (
    <div className="relative flex flex-col flex-1">
      <header className="flex flex-col shadow-[0_1px_0_0_#d6d6d6]">
        <Banner />
        <Header />
        <Navbar />
      </header>
      <div className="flex-col flex-1 items-center">{children}</div>
    </div>
  )
};
