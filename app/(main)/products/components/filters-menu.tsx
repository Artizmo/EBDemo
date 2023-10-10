'use client'

import { useRouter } from 'next/navigation'
import EBMenuFilters from '@/components/ui/EB-menu-filters'

type EBMenuFiltersItem = {
  label: string
  url?: string
  categories?: EBMenuFiltersItem[]
}

type ProductFilterProps = {
  category?: string
  filters?: EBMenuFiltersItem[]
}

export default function FiltersMenu({ filters }: ProductFilterProps ) {
  const router = useRouter()

  // const handleOnChange = (state: boolean) => {
  //   const params = new URLSearchParams()
  //   if (state) params.set(category, filter.label)
  //   router.push(`/products/?${params}`);
  //   router.refresh()
  //   console.log('bingo handling filter', filter)
  // }

  return (
    <EBMenuFilters list={filters}>
      <div className="relative top-[1px]">Filters & Sort</div>
    </EBMenuFilters>
  )
}