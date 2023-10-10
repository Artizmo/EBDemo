'use client'

import { useRouter } from 'next/navigation'
import EBCheckbox from "@/components/ui/EB-checkbox"

type Filter = {
  label: string
}

type ProductFilterProps = {
  category: string
  filter: Filter
}

export default function ProductFilter({ category, filter }: ProductFilterProps ) {
  const router = useRouter()

  const handleOnChange = (state: boolean) => {
    const params = new URLSearchParams()
    if (state) params.set(category, filter.label)
    router.push(`/products/?${params}`);
    router.refresh()
    console.log('bingo handling filter', filter)
  }

  return (
    <EBCheckbox label={filter.label} onChange={handleOnChange} />
  )
}