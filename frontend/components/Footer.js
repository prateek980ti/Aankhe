import React from 'react'

const Navbar = () => {
  return (
    <footer className='bg-black'>

    <div className='text-center flex items-center justify-center h-16 px-12 text-white'>
        <p className='text-center'>{new Date().getFullYear()} Copyright &copy; Aankhe - All rights reserved</p>
    </div>
    </footer>
  )
}

export default Navbar
