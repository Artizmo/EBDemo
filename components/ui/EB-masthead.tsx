import dynamic from 'next/dynamic'
const DefaultMasthead = dynamic(() => import('@/data/default-masthead'))
const BloomreachMasthead = dynamic(() => import('@/data/bloomreach-masthead')
  .catch(() => {
    return () => <DefaultMasthead />
  })
)

export default function EBMastHead() {
  return (
    <BloomreachMasthead />
  )
}