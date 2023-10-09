import EBMasthead from '@/components/ui/EB-masthead'
import Image from 'next/image'

export default function MainPage() {
  return ( 
    <div className="w-full h-[445px] dark-gradient font-interstate">
      <EBMasthead />
      <Image
        src="https://res.cloudinary.com/de0ei4yhn/image/upload/v1694211177/EBDemo/promo4.gif"
        alt=""
        sizes="90vw"
        priority
        width={0}
        height={0}
        className="hidden md:block w-full h-auto"
      />
      <Image
        src="https://res.cloudinary.com/de0ei4yhn/image/upload/v1694211177/EBDemo/promo2.webp"
        alt=""
        sizes="90vw"
        priority
        width={0}
        height={0}
        className="hidden md:block w-full h-auto"
      />
      <article className="absolute p-4 gap-x-4 flex flex-col md:hidden">
        <h2 className="text-[26px] font-medium">Style Inspiration</h2>
        <h3 className="text-[16px] font-light">Your favorite styles, scaled up to perfection, just for you.</h3>
        <div className="mt-4 gap-x-4 flex md:hidden">
          <section>
            <Image
              src="https://res.cloudinary.com/de0ei4yhn/image/upload/v1694211177/EBDemo/productA.webp"
              alt=""
              sizes="100vw"
              width={0}
              height={0}
              priority
              className="w-auto h-[250px] max-w-[unset]"
            />
            <p className="w-full min-w-[10rem]">Women&apos;s Super Sevens Wind Jacket</p>
            <p>$129.00</p>
          </section>
          <section>
            <Image
              src="https://res.cloudinary.com/de0ei4yhn/image/upload/v1694211177/EBDemo/productB.webp"
              alt=""
              sizes="100vw"
              width={0}
              height={0}
              priority
              className="w-auto h-[250px] max-w-[unset]"
            />
            <p className="w-full min-w-[10rem]">Women&apos;s Super Sevens Wind Jacket</p>
            <p>$129.00</p>
          </section>
        </div>
      </article>
    </div>
  )
}