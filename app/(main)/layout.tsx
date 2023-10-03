import Banner from '@/app/(main)/components/banner'
import Header from '@/app/(main)/components/header'
import Navbar from '@/app/(main)/components/navbar'

type LayoutProps = { children: React.ReactNode };

export default function HeaderLayout({ children }: LayoutProps) {
  return (
    <div className="absolute inset-x-0 flex flex-col flex-1">
      <Banner />
      <Header />
      <Navbar />
      <div className="flex-col flex-1 items-center">{children}</div>
    </div>
  )
};
