import filters from '@/data/filters.json'
import ProductFilter from '@/app/(main)/products/components/product-filter'

type FilterOption = {
  label: string,
  value: string
}

type Filter = {
  label: string,
  options: FilterOption[]
}

const getFilters = async (): Promise<Filter[]> => {
  const TIMER = Math.floor(Math.random() * 80) + 10
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(filters)
    }, TIMER);
  });
}

export default async function ProductsFilters() {
  const filters: Filter[] = await getFilters()

  return (
    <>
      {filters.map(filter => (
        <div key={filter.label} className="px-4 pb-2 border-b-[#d6d6d6] border-b border-solid font-normal">
          <div className="uppercase font-semibold">{filter.label}</div>
          {filter.options.map(option => (
            <div key={option.value} className="w-fit my-2 ml-4 uppercase">
              <ProductFilter filter={option} category={filter.label} />
            </div>
          ))}
        </div>
      ))}
    </>
  )
}
