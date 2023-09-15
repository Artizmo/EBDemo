import { Suspense } from 'react'
import ProductsFilters from '@/app/(main)/products/components/products-filters'
import ProductsFiltersSkeleton from '@/app/(main)/products/components/products-filters-skeleton'
import ProductsGrid from '@/app/(main)/products/components/products-grid'
import ProductsGridSkeleton from '@/app/(main)/products/components/products-grid-skeleton'

export default async function ProductsPage() {
  return (
    <div className="gap-y-4 flex flex-col flex-1 text-[12px] text-black xl:mx-[10%]">
      <div className="px-8 py-4 font-normal uppercase">Women / T-Shirts & Tanks</div>
      <div className="mx-4 flex flex-1 gap-4">
        <div className="w-[25%] min-w-[250px] max-w-[300px] flex flex-col gap-y-4">
          <Suspense fallback={<ProductsFiltersSkeleton />}>
            <ProductsFilters />
          </Suspense>
        </div>
        <div className="grid gap-4 grid-cols-[repeat(2,1fr)] md:lg:grid-cols-[repeat(3,1fr)] xl:grid-cols-[repeat(4,1fr)]">
          <Suspense fallback={<ProductsGridSkeleton />}>
            <ProductsGrid />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
