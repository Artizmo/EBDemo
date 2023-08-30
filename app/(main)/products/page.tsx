import Link from 'next/link'

export default function ProductsPage() {
  return (
    <div>
      <div>PDP Page</div>
      <Link href="/">Home</Link>
      <Link href="/checkout">Checkout</Link>
      <Link href="/cart">Cart</Link>
    </div>
  )
}
