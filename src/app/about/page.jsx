"use client";
// import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function AboutPage() {
     const router = useRouter();
     const isLoggedIn = true;
     const handleNavigation = () =>{
          if(isLoggedIn){
               router.push('/about/address')
          }else{
               router.push("/")
          }
     }
  return (
    <div>
      <h1 className="text-2xl">About Page</h1>
      {/* <Link href="/about/address">Address</Link> */}
      <button type='button' onClick={handleNavigation}>Address Page</button>
    </div>
  )
}
