import Image from 'next/image'

export default function MainPage() {
  return ( 
    <div className="w-full h-[445px] dark-gradient">
      <h2 className="absolute text-white text-[42px] font-normal uppercase leading-[48px] p-4 bottom-0 md:hidden">
        experience the outdoor & live your adventure
      </h2>
      <div className="border text-[14px] uppercase font-light border-solid min-w-[5rem] flex justify-center ml-4 absolute text-[white] leading-[normal] mb-[-4rem] p-2 bottom-0 md:hidden">learn more</div>
      {/* <div className="border font-normal border-solid min-w-[5rem] flex justify-center ml-32 absolute text-[white] leading-[normal] mb-[-8rem] p-2 bottom-0 md:hidden">Men</div> */}
      <Image
        // src="https://res.cloudinary.com/de0ei4yhn/image/upload/v1694211177/EBDemo/splash3.webp"
        src="/images/splash4.png"
        alt=""
        sizes="90vw"
        priority
        width={0}
        height={0}
        className="md:hidden w-full h-screen object-cover"
      />
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