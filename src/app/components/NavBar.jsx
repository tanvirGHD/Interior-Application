import Link from 'next/link'

export default function NavBar() {
  return (
    <div>
      <nav className='flex justify-center bg-[#C89756] text-white'>
          <ul className='flex justify-between items-center gap-5 p-5'>
               <Link href="/">
               <li>Home</li>
               </Link>
               <Link href="/services">
               <li>SERVICES</li>
               </Link>
               <Link href="/interioz">
               <li>INTERIOZ</li>
               </Link>
               <Link href="/portfolio">
               <li>PORTFOLIO</li>
               </Link>
               <Link href="/news">
               <li>NEWS</li>
               </Link>
               <Link href="/contact">
               <li>CONTACT</li>
               </Link>
          </ul>
      </nav>
    </div>
  )
}