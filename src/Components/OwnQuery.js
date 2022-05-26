import React, { useState, useEffect } from 'react'

const OwnQuery = (props) => {


    let customer = [...props.customers];
    let rows = [];
    let data ;
    data = customer;
    if(props.queryNo === 1){
        customer = [...props.customers]
        rows = customer;
    }
    else if(props.queryNo === 2){
        for(let i =0; i<data.length; i++){
            if(data[i].contactTitle === 'Owner'){
              rows.push(data[i])
            }
        }
    }
    else if(props.queryNo === 3){
        for(let i =0; i<data.length; i++){
          if(data[i].country === 'Mexico'){
            rows.push(data[i])
          }
        }
      }
      else if(props.queryNo === 4){
        for(let i =0; i<data.length; i++){
          if(data[i].contactTitle === 'Owner' && data[i].city === 'México D.F.'){
            rows.push(data[i])
          }
        }
      }
      else if(props.queryNo === 5){
        for(let i =0; i<data.length; i++){
            if(data[i].city === 'London'){
              rows.push(data[i])
            }
        }
      }
      else if(props.queryNo === 6){
        for(let i =0; i<data.length; i++){
            if(data[i].contactTitle === 'Owner' || data[i].city === 'London'){
              rows.push(data[i])
            }
        }
      }
    else{
        rows = [];
    }


  return (
      <div className='mb-5'>
          {rows.length > 0  && 
    <table className='table-fixed border-collapse text-xs'>
        <thead>
          <tr>
            <th className='border border-slate-600 text-center '>Customer ID</th>
            <th className='border border-slate-600 text-center '>Company Name</th>
            <th className='border border-slate-600 text-center '>Contact Name</th>
            <th className='border border-slate-600 text-center '>Contact Title</th>
            <th className='border border-slate-600 text-center '>Address</th>
            <th className='border border-slate-600 text-center '>City</th>
            <th className='border border-slate-600 text-center '>Postal Code</th>
            <th className='border border-slate-600 text-center '>Country</th>
            <th className='border border-slate-600 text-center '>Phone</th>
          </tr>
        </thead>
        <tbody>
        {rows.map(row => (
          <tr key={row.customerID}>
            <td className='border border-slate-700 '>{row.customerID}</td>
            <td className='border border-slate-700 '>{row.companyName}</td>
            <td className='border border-slate-700 '>{row.contactName}</td>
            <td className='border border-slate-700 '>{row.contactTitle}</td>
            <td className='border border-slate-700 '>{row.address}</td>
            <td className='border border-slate-700 '>{row.city}</td>
            <td className='border border-slate-700 '>{row.postalCode}</td>
            <td className='border border-slate-700 '>{row.country}</td>
            <td className='border border-slate-700 '>{row.phone}</td>
          </tr>
        ))}
      </tbody>
      </table>}
      {rows.length === 0 && 
      <div className='text-center'>
        <h1 className='text-2xl font-bold'>No Results Found for the given query</h1>
        <div>
            <div className='font-semibold text-xl'>List of available queries are:- </div>
            <div className='text-lg'>-{'>'} select * from customers</div>
            <div className='text-lg'>-{'>'} select * from customers where contactTitle= 'Owner'</div>
            <div className='text-lg'>-{'>'} select * from customers where country= 'Mexico'</div>
            <div className='text-lg'>-{'>'} select * from customers where contactTitle= 'Owner' and city='Mexico D.F.'</div>
            <div className='text-lg'>-{'>'} select * from customers where city='London'</div>
            <div className='text-lg'>-{'>'} select * from customers where contactTitle= 'Owner' or city='London'</div>
        </div>
       </div>
       }
      </div>
  )
}

export default OwnQuery