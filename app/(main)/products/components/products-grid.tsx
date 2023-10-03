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
    <section className="flex flex-col">
      <div className="my-2 capitalize font-normal text-[14px]">{products.length} items</div>
      <div className="grid gap-4 grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(3,1fr)] xl:grid-cols-[repeat(4,1fr)]">
        {products.map(product => (
          <div key={product.id}>
            <Image src={product.thumbnailEB} alt="" width={400} height={400} />
            <div className="flex items-center gap-x-2 px-0 py-2">
              {product.colors.slice(0, 4).map(color => (
                <div key={color} style={{ backgroundColor: color }} className={`w-[1.25rem] h-[1.25rem] rounded-full`} />
              ))}
              <span className="text-[12px]">{product.colors.length > 4 && `+ ${product.colors.length}`}</span>
            </div>
            <div className="text-[12px]">{product.label}</div>
            <div className="text-[12px] font-bold">{product.price}</div>
            <div className="text-[12px]">{product.rating} stars ({product.reviewCount} reviews)</div>
            {product.promo ? <div className="text-[12px] text-red font-bold uppercase">{`w/ CODE ${product.promo}`}</div> : null}
          </div>
        ))}
      </div>
    </section>
  )
}
