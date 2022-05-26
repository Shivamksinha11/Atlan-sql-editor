import React, { useState } from 'react';
import './App.css';
import Editor from './Components/Editor';
import FilterData from './Components/FilterData';

function App() {

    const [query, setQuery] = useState('');

    const dataPass = (childData) => {
        setQuery(childData);
    }

  return (
    <div className='flex'>
      <div className='w-1/2'>
        <Editor parentData={dataPass} />
      </div>
      <div>
        <FilterData query={query}/>
      </div>
    </div>
  );
}

export default App;
