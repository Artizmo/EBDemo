import Image from 'next/image'

// throw 'testing error!!!!!!!'

export default function BloomreachMasthead() {

  return (
    <>
      <h2 className="absolute top-[22rem] text-white text-[34px] font-normal uppercase leading-[42px] p-4 md:hidden">
        Begin your autumn journey with the right gear!
      </h2>
      <div className="absolute top-[35rem] ml-4 flex gap-x-4">
        <div className="border text-[14px] uppercase font-light border-solid min-w-[5rem] flex justify-center text-[white] leading-[normal] mb-[-2rem] p-2 md:hidden">women</div>
        <div className="border text-[14px] uppercase font-light border-solid min-w-[5rem] flex justify-center text-[white] leading-[normal] mb-[-2rem] p-2 md:hidden">men</div>
      </div>
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
