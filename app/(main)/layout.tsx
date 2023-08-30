import LogoIcon from '@/components/icons/logo'

type LayoutProps = { children: React.ReactNode };

export default function HeaderLayout({ children }: LayoutProps) {
  return (
    <div>
      <div className="m-4 flex flex-col">
        <LogoIcon className="fill-black w-[120px] sm:w-[160px] " />
      </div>
      <div>{children}</div>
    </div>
  )
};
