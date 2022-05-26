import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center px-16 py-2 shadow-lg bg-slate-300'>
        <div className='px-2 py-1 border-2 border-gray-500 text-base font-semibold'>Atlan SQL Editor</div>
        <div className='flex space-x-4 font-semibold'>
            <div className='cursor-pointer'>Customers</div>
            <div className='cursor-pointer'>Students</div>
        </div>
    </div>
  )
}

export default Navbar