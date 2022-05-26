import React, { useState } from 'react';
import { CodeBlock, dracula } from "react-code-blocks";
import FilterData from './FilterData';

const Editor = (props) => {

    const [query, setQuery] = useState('');
    const [submitQuery, setSubmitQuery] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(query)
        setSubmitQuery(query);
    } 

    const queries = [
        {
         label : "select * from customers",
         value: 1
        },
        {
         label : "select * from customers where contactTitle= 'Owner'",
         value: 2
        },
        {
         label : "select * from customers where country= 'Mexico'",
         value: 3
        }
     ]

    return (
        <div>
            <div style={{backgroundColor: '#282a36'}} className='h-96 overflow-hidden text-base'>
                <CodeBlock
                    className="w-full h-96"
                    text={query}
                    language="sql"
                    showLineNumbers="5"
                    theme={dracula}
                />
            </div>
            <div>
                {queries.map(query => (
                    <button className='w-full hover:bg-green-400 py-4 border-2' key={query.value} onClick={() => {
                        setQuery(query.label);
                        setSubmitQuery(query.value);
                        props.parentData(query.value);
                    }}>{query.label}</button>
                ))}
            </div>
            {/* <FilterData query={submitQuery} /> */}
        </div>
    )
}

export default Editor