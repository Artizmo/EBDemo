import Image from 'next/image'

// throw 'testing error!!!!!!!'

export default function BloomreachMasthead() {

  return (
    <>
      <div className="absolute text-white text-[42px] font-normal uppercase leading-[48px] p-4 bottom-0 md:hidden">
        Begin your autumn journey with the right gear!
      </div>
      <div className="border text-[14px] uppercase font-light border-solid min-w-[5rem] flex justify-center ml-4 absolute text-[white] leading-[normal] mb-[-3rem] p-2 bottom-0 md:hidden">women</div>
      <div className="border text-[14px] uppercase font-light border-solid min-w-[5rem] flex justify-center ml-32 absolute text-[white] leading-[normal] mb-[-3rem] p-2 bottom-0 md:hidden">Men</div>
      <Image
        src="https://res.cloudinary.com/de0ei4yhn/image/upload/v1694211177/EBDemo/splash3.webp"
        alt=""
        sizes="90vw"
        priority
        width={0}
        height={0}
        className="md:hidden w-full h-screen object-cover"
      />
    </>
  )
}
