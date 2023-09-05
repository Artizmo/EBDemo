import Image from 'next/image'

export default function MainPage() {
  return (
    <div>
      <Image
        src="/promo.webp"
        alt=""
        priority
        width={1650}
        height={445}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  )
}
