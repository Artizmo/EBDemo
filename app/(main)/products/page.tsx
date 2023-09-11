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
  const TIMER = Math.floor(Math.random() * 4000) + 1000
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('bingo', TIMER)
      return resolve(productsData)
    }, TIMER);
  });
}

export default async function ProductsPage() {
  const products: Product[] = await getProducts()

  return (
    <div className="flex flex-col flex-1">
      <div className="p-4 text-[14px] font-normal` uppercase">Women / T-Shirts & Tanks</div>
      <div className="m-4 flex flex-1 gap-4">
        <div className="w-[20%] max-w-[300px] p-4 bg-[#f7f7f7]">filters</div>
        <div className="grid gap-4 grid-cols-[repeat(4,1fr)]">
          {products.map((product) => (
            <div key={product.id}>
              {/* <Image src={`${product.thumbnail}/id/${Math.ceil(Math.random() * 300)}/300/300`} alt="" width="350" height="350" /> */}
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
        </div>
      </div>
    </div>
  )
}
