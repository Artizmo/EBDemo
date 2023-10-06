import categoryData from '@/data/categories.json'

type Category = {
  label: String
  url: String
  categories?: Category[]
}

const getCategories = async (): Promise<Category[]> => {
  const TIMER = Math.floor(Math.random() * 1000) + 200
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(categoryData)
    }, TIMER);
  });
}

export default async function NavbarMenuList() {
  const categories: Category[] = await getCategories()

  return (
    <div>
      {categories.map((category, i) => (
        <div key={i}>{category.label}</div>
      ))}
    </div>
  )
}