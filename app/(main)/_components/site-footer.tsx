import Image from 'next/image'
import FacebookIcon from "@/components/icons/facebook"
import InstagramIcon from "@/components/icons/instragram"
import PinterestIcon from "@/components/icons/pinterest"
import TwitterIcon from "@/components/icons/twitter"
import YoutubeIcon from "@/components/icons/youtube"

export default function SiteFooter() {
  return (
    <footer className="text-white flex flex-col justify-end w-full h-screen">
      <Image 
        src="/images/footer.png"
        alt=""
        sizes="90vw"
        priority
        width={0}
        height={0}
        className="max-h-[28rem] absolute z-[-1] md:hidden w-full h-screen object-cover object-right"
      />
      <section className="p-4">
        <p className="uppercase text-[14px]">follow us</p>
        <p className="text-[14px] font-light">There is always something more for you to discover.</p>
      </section>
      <section className="flex gap-x-6 p-4">
        <FacebookIcon className="w-[24px] fill-white" />
        <YoutubeIcon className="w-[24px] fill-white" />
        <PinterestIcon className="w-[24px] fill-white" />
        <InstagramIcon className="w-[24px] fill-white" />
        <TwitterIcon className="w-[24px] fill-white" />
      </section>
      <section className="p-4">
        <div>collapsible A</div>
        <div>collapsible B</div>
        <div>collapsible C</div>
        <div>collapsible D</div>
        <div>collapsible E</div>
      </section>
      <section className="flex justify-between p-4">
        <p>text 1</p>
        <p>text 2</p>
        <p>text 3</p>
      </section>
      <section className="flex justify-between p-4">
        <p>text 1</p>
        <p>text 2</p>
      </section>
    </footer>
  )
}