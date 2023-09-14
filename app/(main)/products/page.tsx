import Image from 'next/image'
import productsData from '@/data/products.json'
import filtersData from '@/data/filters.json'
import EBCheckbox from '@/components/ui/EBCheckbox'

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

type FilterOption = {
  label: string,
  value: string
}

type Filter = {
  label: string,
  options: FilterOption[]
}

const getProducts = async (): Promise<Product[]> => {
  const TIMER = Math.floor(Math.random() * 4000) + 1000
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(productsData)
    }, TIMER);
  });
}

const getFilters = async (): Promise<Filter[]> => {
  const TIMER = Math.floor(Math.random() * 4000) + 1000
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(filtersData)
    }, TIMER);
  });
}

export default async function ProductsPage() {
  const products: Product[] = await getProducts()
  const filters: Filter[] = await getFilters()

  return (
    <div className="gap-y-4 flex flex-col flex-1 text-[14px] text-black">
      <div className="px-8 py-4 font-normal` uppercase">Women / T-Shirts & Tanks</div>
      <div className="flex flex-1 gap-4">
        <div className="w-[20%] max-w-[300px] pl-4 flex flex-col gap-y-4">
          {filters.map(filter => (
            <div key={filter.label} className="px-4 pb-2 border-b-[#d6d6d6] border-b border-solid font-normal">
              <div className="uppercase font-medium">{filter.label}</div>
              {filter.options.map(option => (
                <div key={option.value} className="w-fit my-2 ml-4 capitalize">
                  <EBCheckbox label={option.label} />
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="grid gap-4 grid-cols-[repeat(4,1fr)]">
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
        </div>
      </div>
    </div>
  )
}
