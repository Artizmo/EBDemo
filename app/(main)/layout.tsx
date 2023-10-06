import Banner from '@/app/(main)/components/banner'
import Navbar from '@/app/(main)/components/navbar'
import CategoryNavbar from '@/app/(main)/components/category-navbar'

type LayoutProps = { children: React.ReactNode };

export default function HeaderLayout({ children }: LayoutProps) {
  return (
    <div className="absolute overflow-x-clip inset-x-0 flex flex-col flex-1">
      <Banner />
      <Navbar />
      <CategoryNavbar />
      <div className="flex-col flex-1 items-center">{children}</div>
    </div>
  )
};
