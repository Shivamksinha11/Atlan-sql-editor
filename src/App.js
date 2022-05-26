import React, { useState } from 'react';
import Editor from './Components/Editor';
import FilterData from './Components/FilterData';
import Navbar from './Components/Navbar';

function App() {

    const [query, setQuery] = useState('');
    const [ showEmployees, setShowEmployees ] = useState(false);

    const toggle = (data) => {
        setShowEmployees(data);
        //console.log(data);
        setQuery('');
    }

    const dataPass = (childData) => {
        setQuery(childData);
    }

  return (
    <>
      <Navbar show={toggle}/>
      <div className='flex fixed'>

        <div className='w-[500px] fixed border-r-2 border-gray-400 h-full'>
          <Editor showEmployees={showEmployees} parentData={dataPass} />
        </div>

        <div className='w-full ml-[510px] mr-5 mt-10'>
          {(query === 1 || query === 2 || query === 3) && <FilterData showEmployees={showEmployees} query={query}/> }
        </div>

      </div>
    </>
  );
}

export default App;
