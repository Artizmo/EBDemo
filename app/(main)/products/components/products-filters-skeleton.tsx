const skeletonCategories = new Array(6).fill(null)
const skeletonFilters = new Array(6).fill(null)

export default async function ProductsFiltersSkeleton() {

  return (
    <>
      {skeletonCategories.map((_, i) => (
        <div className="animate-pulse flex flex-col gap-y-2" key={i}>
          <div className="bg-[#e6e6e6] min-w-[230px] min-h-[230px] max-w-[400px] max-h-[400px]" />
          <div className="gap-x-2 flex">
            {skeletonFilters.map((_, i) => (
              <div key={i} className={`bg-[#e6e6e6] w-6 h-6 rounded-full`} />
            ))}
          </div>
          <div className="bg-[#e6e6e6] w-[100%] h-[1rem]" />
          <div className="bg-[#e6e6e6] w-[40%] h-[1rem]" />
          <div className="bg-[#e6e6e6] w-[65%] h-[1rem]" />
        </div>
      ))}
    </>
  )
}
