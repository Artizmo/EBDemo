import Image from 'next/image'

export default function MainPage() {
  return ( 
    <div className="w-full h-[445px]">
      <h2 className="absolute text-[39px] text-[white] font-bold leading-[normal] mb-40 p-4 bottom-0">
        Waterproof Jacket For Your Spring Adventures
      </h2>
      <div className="bg-black-50 min-w-[5rem] flex justify-center ml-4 absolute text-[white] font-light leading-[normal] mb-32 p-2 bottom-0">Women</div>
      <div className="bg-black-50 min-w-[5rem] flex justify-center ml-32 absolute text-[white] font-light leading-[normal] mb-32 p-2 bottom-0">Men</div>
      <Image
        src="/splash3.png"
        alt=""
        sizes="100vw"
        priority
        width={0}
        height={0}
        className="block md:hidden w-full h-screen object-cover"
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
      <article>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin erat sit amet nulla consectetur, id commodo leo pretium. Phasellus imperdiet non mi quis tristique. Curabitur at lacinia velit. Proin fermentum in quam a imperdiet. Quisque vestibulum, risus ornare blandit pharetra, arcu velit placerat arcu, in vulputate quam nulla non massa. Nam eleifend arcu id maximus condimentum. Donec id lectus tellus. Nulla facilisi. Sed molestie dignissim nunc nec tincidunt. Sed ut aliquet nunc, quis ullamcorper massa. Etiam varius at libero faucibus pulvinar.

  Nunc sed ex risus. Donec elementum nunc purus, nec varius lacus consequat id. Nulla vestibulum mi at odio efficitur hendrerit. Phasellus sollicitudin magna nec lectus varius, gravida consequat nunc mollis. Nunc sit amet erat nec ante pharetra rhoncus. Sed varius placerat arcu sed molestie. Nam nec diam pharetra, blandit ipsum eu, varius risus.
      </article>
    </div>
  )
}