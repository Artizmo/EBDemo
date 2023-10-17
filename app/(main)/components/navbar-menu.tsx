import categoryData from '@/data/categories.json'
import EBMenuList from '@/components/ui/EB-menu-list'

type EBMenuListItem = {
  label: string
  url?: string
  categories?: EBMenuListItem[]
}

const getCategories = async (): Promise<EBMenuListItem[]> => {
  const TIMER = Math.floor(Math.random() * 1000) + 200
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(categoryData)
    }, TIMER);
  });
}

const EBThirdPartyComp = () => {
  return (
    <div>Bloomreach data, for ex.</div>
  )
}

export default async function NavbarMenu() {
  const categories: EBMenuListItem[] = await getCategories()

  return (
    <EBMenuList list={categories} />
  )
}
