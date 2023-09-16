import Image from 'next/image'
import productsData from '@/data/products.json'

type Product = {
  id: string
  label: string
  thumbnail: string
  thumbnailEB: string
  colors: string[]
  price: string
  rating?: number | null
  reviewCount?: number | null
  promo?: string | null
}

const getProducts = async (): Promise<Product[]> => {
  const TIMER = Math.floor(Math.random() * 100) + 100
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(productsData)
    }, TIMER);
  });
}

export default async function ProductsGrid() {
  const products: Product[] = await getProducts()

  return (
    <>
      {products.map(product => (
        <div key={product.id}>
          <Image src={product.thumbnailEB} alt="" width={400} height={400} className="" />
          <div className="gap-x-2 px-0 py-2 flex">
            {product.colors.map(color => (
              <div key={color} style={{ backgroundColor: color }} className={`w-6 h-6 rounded-full`} />
            ))}
          </div>
          <div>{product.label}</div>
          <div>{product.price}</div>
          <div>{product.rating} stars ({product.reviewCount} reviews)</div>
          {product.promo ? <div className="text-red font-light">{`w/ CODE ${product.promo}`}</div> : null}
        </div>
      ))}
    </>
  )
}
