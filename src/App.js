import React, { useState } from 'react';
import Editor from './Components/Editor';
import FilterData from './Components/FilterData';
import Navbar from './Components/Navbar';
import logo from './Images/logo.avif'

function App() {

    const [query, setQuery] = useState(1);
    const [data, setData] = useState('');
    const [ showEmployees, setShowEmployees ] = useState(false);

    const toggle = (data) => {
        setShowEmployees(data);
        //console.log(data);
        setQuery(1);
    }

    const dataPass = (childData) => {
        setQuery(childData.value);
        setData(childData.label);
    }

  return (
    <>
      <Navbar show={toggle}/>
      <div className='md:flex'>

        <div className='md:w-[500px] top-[58px] md:fixed border-r-2 border-gray-400'>
          <Editor showEmployees={showEmployees} parentData={dataPass} />
        </div>

        <div className='w-full mt-20 md:ml-[510px] mr-5'>
          {(query === 1 || query === 2 || query === 3 || query === 4 || query === 5 || query === 6) && <FilterData showEmployees={showEmployees} showText={data} query={query}/> }
        </div>

        <div className='flex w-full pt-1 font-bold text-blue-500 md:hidden items-center justify-center'><span>Made for </span><img alt="Atlan" src={logo} className='h-5 ml-2'/></div>
      </div>
    </>
  );
}

export default App;
