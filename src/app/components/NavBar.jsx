import React from 'react'

export default function NavBar() {
  return (
    <div>
      <nav className='flex justify-center bg-violet-400 text-white'>
          <ul className='flex justify-between items-center gap-5 p-5'>
               <li>Home</li>
               <li>About</li>
               <li>Profile</li>
               <li>DashBoard</li>
          </ul>
      </nav>
    </div>
  )
}
