const skeletonCategories = new Array(6).fill(null)
const skeletonFilters = new Array(6).fill(null)

export default async function ProductsFiltersSkeleton() {

  return (
    <>
      {skeletonCategories.map((_, i) => (
        <div key={i} className="animate-pulse px-4 pb-2">
          <div className="h-8 w-full bg-[#e6e6e6]" />
          {skeletonFilters.map((_, i) => (
            <div key={i} className="bg-[#e6e6e6] w-[75%] h-4 my-2 ml-4 capitalize" />
          ))}
        </div>
      ))}
    </>
  )
}
