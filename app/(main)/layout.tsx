import Banner from '@/app/(main)/components/banner'
import Header from '@/app/(main)/components/header'
import Navbar from '@/app/(main)/components/navbar'

type LayoutProps = { children: React.ReactNode };

export default function HeaderLayout({ children }: LayoutProps) {
  return (
    <div className=" flex flex-col flex-1">
      <Banner />
      <div className="sticky top-0 z-[1]">
        <Header />
      </div>
      <Navbar />
      <div className="flex-col flex-1 items-center">{children}</div>
    </div>
  )
};
