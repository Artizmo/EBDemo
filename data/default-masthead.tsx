import Image from 'next/image'

export default function DefaultMasthead() {
  return (
    <>
      <h2 className="my-8 bottom-[10rem] absolute text-white text-[42px] font-normal uppercase leading-[48px] p-4 md:hidden">
        experience the outdoor & live your adventure
      </h2>
      <div className="my-8 bottom-[12rem] absolute border text-[14px] uppercase font-light border-solid min-w-[5rem] flex justify-center ml-4 text-[white] leading-[normal] mb-[-2rem] p-2 md:hidden">learn more</div>
      <Image
        src="/images/splash4.png"
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
