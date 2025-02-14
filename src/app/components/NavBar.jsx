import Link from 'next/link'

export default function NavBar() {
  return (
    <div>
      <nav className='flex justify-center bg-violet-400 text-white'>
          <ul className='flex justify-between items-center gap-5 p-5'>
               <Link href="/">
               <li>Home</li>
               </Link>
               <Link href="/services">
               <li>Service</li>
               </Link>
               <Link href="/about">
               <li>About</li>
               </Link>
          </ul>
      </nav>
    </div>
  )
}
