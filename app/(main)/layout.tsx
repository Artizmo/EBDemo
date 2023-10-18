import Banner from '@/app/(main)/_components/banner'
import Navbar from '@/app/(main)/_components/navbar'
import CategoryNavbar from '@/app/(main)/_components/category-navbar'
import SiteFooter from '@/app/(main)/_components/site-footer'

type LayoutProps = { children: React.ReactNode };

export default function HeaderLayout({ children }: LayoutProps) {
  return (
    <div className="overflow-x-clip inset-x-0 flex flex-col flex-1">
      <Banner />
      <Navbar />
      <CategoryNavbar />
      <div className="flex-col flex-1 items-center">{children}</div>
      <SiteFooter />
    </div>
  )
};
