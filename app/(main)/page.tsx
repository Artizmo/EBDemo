import Image from 'next/image'

export default function MainPage() {
  return (
    <div className="w-[1650px] h-[445px]">
      <Image
        src="https://res.cloudinary.com/de0ei4yhn/image/upload/v1693951141/EBDemo/promo.webp"
        alt=""
        sizes="90vw"
        priority
        className="w-full h-auto"
      />
    </div>
  )
}
