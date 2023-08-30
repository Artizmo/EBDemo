import Link from 'next/link'

export default function CartPage() {
  return (
    <div>
      <div>Cart Page</div>
      <Link href="/">Home</Link>
      <Link href="/products">Products</Link>
      <Link href="/checkout">Checkout</Link>
    </div>
  )
}