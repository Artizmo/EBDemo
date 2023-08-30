import Link from 'next/link'

export default function MainPage() {
  return (
    <div>
      <div>Eddie Bauer</div>
      <Link href="/checkout">Checkout</Link>
      <Link href="/products">Products</Link>
      <Link href="/cart">Cart</Link>
    </div>
  )
}
