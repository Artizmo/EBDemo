import { Suspense } from 'react'
import ProductsFilters from '@/app/(main)/products/components/products-filters'
import ProductsFiltersSkeleton from '@/app/(main)/products/components/products-filters-skeleton'
import ProductsGrid from '@/app/(main)/products/components/products-grid'
import ProductsGridSkeleton from '@/app/(main)/products/components/products-grid-skeleton'

export default async function ProductsPage() {
  return (
    <div className="gap-y-4 flex flex-col flex-1 text-[12px] text-black '2xl':mx-[10%]">
      <div className="pl-4 pt-4 md:px-8 md:py-4 font-normal uppercase ">Women / T-Shirts & Tanks</div>
      <div className="mx-4 flex flex-1 gap-4">
        <div className="hidden md:w-[25%] md:min-w-[250px] md:max-w-[300px] md:flex md:flex-col md:gap-y-4">
          <Suspense fallback={<ProductsFiltersSkeleton />}>
            <ProductsFilters />
          </Suspense>
        </div>
        <div className="grid gap-4 grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(3,1fr)] xl:grid-cols-[repeat(4,1fr)]">
          <Suspense fallback={<ProductsGridSkeleton />}>
            <ProductsGrid />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
