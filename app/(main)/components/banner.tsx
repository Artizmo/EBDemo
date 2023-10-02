import Toolbar from '@/app/(main)/components/toolbar'
import AdventureIcon from '@/components/icons/adventure'

export default function Banner() {
  return (
    <section className="relative text-white bg-teal md:bg-black p-2 flex">
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
  )
}