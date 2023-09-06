import Image from 'next/image'
import promoImage from '@/public/promo.webp'

export default async function MainPage() {

  return (
    <div>
      <Image
        src={promoImage}
        alt=""
        priority
        width={1650}
        height={445}
        placeholder="blur"
      />
    </div>
  )
}
