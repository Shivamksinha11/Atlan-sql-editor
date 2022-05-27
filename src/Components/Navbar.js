import React, { useState } from 'react'

const Navbar = (props) => {

  const [ showEmployees, setShowEmployees ] = useState(false);
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const toggle = () => {
    setShowEmployees(true);
    props.show(true);
  }

  const toggle2 = () => {
    setShowEmployees(false);
    props.show(false);
  }

  return (
    // <div className='w-full flex justify-between items-center px-16 py-2 shadow-lg bg-slate-300 fixed'>
    //     <div className='px-2 py-1 border-2 border-gray-500 text-base font-semibold'>Atlan SQL Editor</div>
    //     <div className='hidden md:flex space-x-4 font-semibold'>
    //         <div className='cursor-pointer' onClick={toggle2}>Customers</div>
    //         <div className='cursor-pointer' onClick={toggle}>Products</div>
    //     </div>
    // </div>
    <>
    <nav className="w-full flex z-10 md:fixed flex-wrap items-center justify-between px-2 py-3 shadow-lg bg-slate-300">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          
          <div className=' px-2 py-1 border-2 border-gray-500 text-base font-semibold'>Atlan SQL Editor</div>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug cursor-pointer"
                onClick={toggle2}
              >
              <span className="ml-2">Customers</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug cursor-pointer"
                onClick={toggle}
              >
              <span className="ml-2">Products</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
  
  )
}

export default Navbar