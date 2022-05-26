import React, { useState } from 'react'

const Navbar = (props) => {

  const [ showEmployees, setShowEmployees ] = useState(false);

  const toggle = () => {
    setShowEmployees(true);
    props.show(true);
  }

  const toggle2 = () => {
    setShowEmployees(false);
    props.show(false);
  }

  return (
    <div className='w-full flex justify-between items-center px-16 py-2 shadow-lg bg-slate-300'>
        <div className='px-2 py-1 border-2 border-gray-500 text-base font-semibold'>Atlan SQL Editor</div>
        <div className='flex space-x-4 font-semibold'>
            <div className='cursor-pointer' onClick={toggle2}>Customers</div>
            <div className='cursor-pointer' onClick={toggle}>Products</div>
        </div>
    </div>
  )
}

export default Navbar