import Image from 'next/image'

export default async function MainPage() {

  return (
    <div>
      <Image
        src="https://res.cloudinary.com/de0ei4yhn/image/upload/v1693951141/promo.webp"
        alt=""
        priority
        width={1650}
        height={445}
        placeholder="blur"
        blurDataURL="/promo_thumbnail.webp"
      />
    </div>
  )
}
