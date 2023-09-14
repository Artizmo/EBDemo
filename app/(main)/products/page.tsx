import { Suspense } from 'react'
import products from '@/data/products.json'
import filters from '@/data/filters.json'
import EBCheckbox from '@/components/ui/EBCheckbox'
import ProductsGrid from '@/app/(main)/products/components/products-grid'

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

type ProductResponse = {
  filters: Filter[],
  products: Product[]
}

const getProducts = async (): Promise<ProductResponse> => {
  const TIMER = Math.floor(Math.random() * 4000) + 1000
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve({ filters, products })
    }, TIMER);
  });
}

export default async function ProductsPage() {
  const { filters, products }: ProductResponse = await getProducts()

  return (
    <div className="gap-y-4 flex flex-col flex-1 text-[12px] text-black xl:mx-[10%]">
      <div className="px-8 py-4 font-normal uppercase">Women / T-Shirts & Tanks</div>
      <div className="mx-4 flex flex-1 gap-4">
        <div className="w-[25%] min-w-[250px] max-w-[300px] flex flex-col gap-y-4">
          <Suspense fallback={<p>Loading filters...</p>}>
            {filters.map(filter => (
              <div key={filter.label} className="px-4 pb-2 border-b-[#d6d6d6] border-b border-solid font-normal">
                <div className="uppercase font-semibold">{filter.label}</div>
                {filter.options.map(option => (
                  <div key={option.value} className="w-fit my-2 ml-4 capitalize">
                    <EBCheckbox label={option.label} />
                  </div>
                ))}
              </div>
            ))}
          </Suspense>
        </div>
        <div className="grid gap-4 grid-cols-[repeat(2,1fr)] md:lg:grid-cols-[repeat(3,1fr)] xl:grid-cols-[repeat(4,1fr)]">
          <Suspense fallback={<p>Loading...</p>}>
            <ProductsGrid />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
