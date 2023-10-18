import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="shadow-[0px_2px_2px_0px_#73737352] relative hidden md:flex bg-light-gray p-2 text-black font-medium uppercase text-[14px] justify-center gap-x-10 hover:[&>a]:shadow-[0_4px_0_0_teal]">
      <Link href="/products">women</Link>
      <Link href="/products">men</Link>
      <Link href="/products">outerwear</Link>
      <Link href="/products">kids</Link>
      <Link href="/products">gear & home</Link>
      <Link href="/products" className="text-red">clearance & sale</Link>
      <Link href="/products">about us</Link>
    </nav>
  )
}