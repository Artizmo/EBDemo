import Image from 'next/image'

export default function MainPage() {
  return ( 
    <div className="w-full h-[445px]">
       <Image
        src="/splash2.png"
        alt=""
        sizes="100vw"
        priority
        width={0}
        height={0}
        className="block md:hidden w-full h-auto"
      />
      <Image
        src="/promo3.gif"
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
    </div>
  )
}