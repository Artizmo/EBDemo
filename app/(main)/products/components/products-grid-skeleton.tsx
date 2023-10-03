const skeletonProducts = new Array(20).fill(null)
const skeletonColors = new Array(4).fill(null)

export default async function ProductsGridSkeleton() {
  return (
    <section className="flex-1 flex flex-col">
      <div className="my-2 bg-[#e6e6e6] w-[100%] h-[1rem] mb-4" />
      <div className="grid gap-4 grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(3,1fr)] xl:grid-cols-[repeat(4,1fr)]">
        {skeletonProducts.map((_, i) => (
          <div className="animate-pulse flex flex-col gap-y-2" key={i}>
            <div className="bg-[#e6e6e6] w-full aspect-square" />
            <div className="gap-x-2 flex">
              {skeletonColors.map((_, i) => (
                <div key={i} className={`bg-[#e6e6e6] w-6 h-6 rounded-full`} />
              ))}
            </div>
            <div className="bg-[#e6e6e6] w-[100%] h-[1rem]" />
            <div className="bg-[#e6e6e6] w-[40%] h-[1rem]" />
            <div className="bg-[#e6e6e6] w-[65%] h-[1rem]" />
          </div>
        ))}
      </div>
    </section>
  )
}
