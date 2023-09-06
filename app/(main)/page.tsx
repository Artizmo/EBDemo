import dynamic from 'next/dynamic'

const Promo = dynamic(() => import('@/app/(main)/promo'), { ssr: false })

export default async function MainPage() {

  return (
    <div>
      <Promo />
    </div>
  )
}
