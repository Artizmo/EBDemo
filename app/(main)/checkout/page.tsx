import Link from 'next/link';

export default function CheckoutPage() {
  return (
    <div>
      <div>Checkout Page</div>
      <Link href="/">Home</Link>
      <Link href="/products">Product</Link>
      <Link href="/cart">Cart</Link>
    </div>
  )
}