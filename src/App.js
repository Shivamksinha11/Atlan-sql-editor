import React, { useState } from 'react';
import Editor from './Components/Editor';
import FilterData from './Components/FilterData';
import Navbar from './Components/Navbar';

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
      <div className='flex'>

        <div className='w-[500px] top-[50px] fixed border-r-2 border-gray-400 h-full'>
          <Editor showEmployees={showEmployees} parentData={dataPass} />
        </div>

        <div className='w-full ml-[510px] mr-5 mt-20'>
          {(query === 1 || query === 2 || query === 3 || query === 4 || query === 5 || query === 6) && <FilterData showEmployees={showEmployees} showText={data} query={query}/> }
        </div>

      </div>
    </>
  );
}

export default App;
