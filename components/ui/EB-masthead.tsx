import dynamic from 'next/dynamic'
const DefaultMasthead = dynamic(() => import('@/data/default-masthead'))
const BloomreachMasthead = dynamic(() => import('@/data/bloomreach-masthead')
  .catch(() => {
    // eslint-disable-next-line react/display-name
    return () => <DefaultMasthead />
  })
)

export default function EBMastHead() {
  return (
    <BloomreachMasthead />
  )
}