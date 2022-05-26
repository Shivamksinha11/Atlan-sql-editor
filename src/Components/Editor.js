import React, { useState } from 'react';
import { CodeBlock, dracula } from "react-code-blocks";
import FilterData from './FilterData';
import logo from '../Images/logo.avif'

const Editor = (props) => {

    const [query, setQuery] = useState('');
    const [submitQuery, setSubmitQuery] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitQuery(query);
    } 
    let queries;
    if(!props.showEmployees){
        queries = [
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
            },
            // {
            //  label : "select * from customers where contactTitle= 'Owner' and city='Mexico D.F.'",
            //  value: 4
            // },
            // {
            //  label : "select * from customers where city='London'",
            //  value: 5
            // },
            // {
            //  label : "select * from customers where contactTitle= 'Owner' or city='London'",
            //  value: 6
            // }
         ]
    } else{
        queries = [
            {
             label : "select * from products",
             value: 1
            },
            {
             label : "select * from products where productName= 'Chai'",
             value: 2
            },
            {
             label : "select * from products where supplierID= 1",
             value: 3
            },
         ]
    }


    return (
        <div>
            <div style={{backgroundColor: '#282a36'}} className='h-[35vh] overflow-hidden text-base'>
                <CodeBlock
                    className="w-full"
                    text={query}
                    language="sql"
                    showLineNumbers="5"
                    theme={dracula}
                />
            </div>
            <div className='px-2 overflow-y-scroll h-[53vh] '>
                {queries.map(query => (
                    <button className='w-full border bg-slate-300 hover:bg-white border-slate-300 text-left py-2 px-2 my-1 font-medium rounded-sm text-base truncate' key={query.value} onClick={() => {
                        setQuery(query.label);
                        setSubmitQuery(query.value);
                        props.parentData(query);
                    }}><i className="fa-solid fa-play"></i><span className='ml-2'>{query.label}</span></button>
                ))}
            </div>
            <div className='w-full pt-1 font-bold text-blue-500 flex items-center justify-center'><span>Made for </span><img src={logo} className='h-5 ml-2'/></div>
        </div>
    )
}

export default Editor