import { Suspense } from 'react'
import ProductsFilters from '@/app/(main)/products/components/products-filters'
import ProductsFiltersSkeleton from '@/app/(main)/products/components/products-filters-skeleton'
import ProductsGrid from '@/app/(main)/products/components/products-grid'
import ProductsGridSkeleton from '@/app/(main)/products/components/products-grid-skeleton'

type Filters = {
  size?: string
}

type ProductsPageProps = {
  searchParams: Filters
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  return (
    <div className="gap-y-4 flex flex-col flex-1 text-[1rem] font-normal text-[1rem] sm:text-[12px] text-black '2xl':mx-[10%]">
      <div className="pl-4 pt-4 md:px-8 md:py-4 font-normal uppercase text-[14px]">Women / T-Shirts & Tanks</div>
      <div className="mx-4 flex flex-1 gap-4">
        <div className="hidden md:w-[25%] md:min-w-[250px] md:max-w-[300px] md:flex md:flex-col md:gap-y-4">
          <Suspense fallback={<ProductsFiltersSkeleton />}>
            <ProductsFilters />
          </Suspense>
        </div>
        <Suspense fallback={<ProductsGridSkeleton />}>
          <ProductsGrid filters={searchParams} />
        </Suspense>
      </div>
    </div>
  )
}
