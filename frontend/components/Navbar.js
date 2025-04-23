import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (

    <header className='bg-black'>
      <div className='text-center flex justify-between h-16 px-12'>
        <div className="logo w-16 p-2 items-center justify-center flex text-white gap-3"><img src="images/eye.gif" alt="" />Aankhe</div>
        <ul className='flex gap-3 text-center justify-center items-center text-white'>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <li>Contact Us</li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
