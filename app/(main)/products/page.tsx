import Image from 'next/image'
import productsData from '@/data/products.json'

type Product = {
  id: string
  label: string
  thumbnail: string
  colors: string[]
  price: string
  rating?: number | null
  reviewCount?: number | null
  promo?: string | null
}

const getProducts = async (): Promise<Product[]> => {
  const TIMER = Math.floor(Math.random() * 4000) + 2000
  return new Promise((resolve) => {
      setTimeout(() => resolve(productsData), TIMER);
  });
}

export default async function ProductsPage() {
  const products: Product[] = await getProducts()

  return (
    <div className="flex flex-col flex-1">
      <div className="p-4 text-[14px] font-normal` uppercase">Women / T-Shirts & Tanks</div>
      <div className="flex flex-1">
        <div className="w-[20%] max-w-[300px] p-4 mx-4 bg-[#f7f7f7]">filters</div>
        <div className="grid gap-y-8 grid-cols-[repeat(4,25%)] flex-1">
          {products.map((product) => (
            <div key={product.id} className="max-w-[300px]">
              <Image src={`${product.thumbnail}/id/${Math.ceil(Math.random() * 300)}/300/300`} alt="" width="300" height="300" />
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
