import categoryData from '@/data/categories.json'
import EBMenuList from '@/components/ui/EB-menu-list'

type Category = {
  label: String
  url: String
  test?: String
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
    <EBMenuList list={categories} />
  )
}