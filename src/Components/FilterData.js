import React, { useState } from 'react';
import { CodeBlock, dracula } from "react-code-blocks";
import OwnQuery from './OwnQuery';
import * as XLSX from "xlsx";


function FilterData(props){

  const [ code, setCode ] = useState('');
  const [ qno, setQno ] = useState(0);


  const downloadExcel = (data) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    //let buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
    //XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
    XLSX.writeFile(workbook, "DataSheet.xlsx");
  };
  
  const displayQuery = () => {
    if(code === 'select * from customers'){
        setQno(1);
    }
    else if(code === 'select * from customers where contactTitle= \'Owner\''){
        setQno(2);
    }
    else if(code === 'select * from customers where country= \'Mexico\''){
        setQno(3);
    }
    else if(code === 'select * from customers where contactTitle= \'Owner\' and city=\'Mexico D.F.\''){
        setQno(4);
    }
    else if(code === 'select * from customers where city=\'London\''){
        setQno(5);
    }
    else if(code === 'select * from customers where contactTitle= \'Owner\' or city=\'London\''){
        setQno(6);
    }
    else{
        setQno(7);
    }
  }
  const handleChange = (e) => {
    setCode(e.target.value);
  }

  const customers = [        
    {
    "customerID" : "AROUT",
    "companyName" : "Around the Horn",
    "contactName" : "Thomas Hardy",
    "contactTitle" : "Sales Representative",
    "address" :  "120 Hanover Sq.",
    "city" : "London",
    "postalCode" : "WA1 1DP",
    "country" : "UK",
    "phone" : "(171) 555-7788",
    },
    {
    "customerID" : "BERGS",
    "companyName" : "Berglunds snabbköp",
    "contactName" : "Christina Berglund",
    "contactTitle" : "Order Administrator",
    "address" : "Berguvsvägen  8",
    "city" : "Luleå",
    "postalCode" : "S-958 22",
    "country" : "Sweden",
    "phone" : "0921-12 34 65",
    },
    {
    "customerID" : "BLAUS",
    "companyName" : "Blauer See Delikatessen",
    "contactName" : "Hanna Moos",
    "contactTitle" : "Sales Representative",
    "address" :  "Forsterstr. 57",
    "city" : "Mannheim",
    "postalCode" : "68306",
    "country" : "Germany",
    "phone" : "0621-08460",
    },
    {
    "customerID" : "BLONP",
    "companyName" : "Blondesddsl père et fils",
    "contactName" : "Frédérique Citeaux",
    "contactTitle" : "Marketing Manager",
    "address" :  "24 place Kléber",
    "city" : "Strasbourg",

    "postalCode" : "67000",
    "country" : "France",
    "phone" : "88.60.15.31",



    },
    {
    "customerID" : "BOLID",
    "companyName" : "Bólido Comidas preparadas",
    "contactName" : "Martín Sommer",
    "contactTitle" : "Owner",
    "address" :  "67C Araquil",
    "city" : "Madrid",

    "postalCode" : 28023,
    "country" : "Spain",
    "phone" : "(91) 555 22 82",



    },
    {
    "customerID" : "BONAP",
    "companyName" : "Bon app'",
    "contactName" : "Laurence Lebihan",
    "contactTitle" : "Owner",
    "address" :  "12 rue des Bouchers",
    "city" : "Marseille",

    "postalCode" : 13008,
    "country" : "France",
    "phone" : "91.24.45.40",



    },
    {
    "customerID" : "ANTON",
    "companyName" : "Antonio Moreno Taquería",
    "contactName" : "Antonio Moreno",
    "contactTitle" : "Owner",
    "address" :  "Mataderos  2312",
    "city" : "México D.F.",

    "postalCode" : 5023,
    "country" : "Mexico",
    "phone" : "(5) 555-3932",



    },
    {
    "customerID" : "ANATR",
    "companyName" : "Ana Trujillo Emparedados y helados",
    "contactName" : "Ana Trujillo",
    "contactTitle" : "Owner",
    "address" :  "Avda. de la Constitución 2222",
    "city" : "México D.F.",

    "postalCode" : 5021,
    "country" : "Mexico",
    "phone" : "(5) 555-4729",



    },
    {
    "customerID" : "CACTU",
    "companyName" : "Cactus Comidas para llevar",
    "contactName" : "Patricio Simpson",
    "contactTitle" : "Sales Agent",
    "address" :  "Cerrito 333",
    "city" : "Buenos Aires",

    "postalCode" : 1010,
    "country" : "Argentina",
    "phone" : "(1) 135-5555",



    },
    ]

    const employees = 
    [
      {
        "productID" : 4,
        "supplierID" : 2,
        "categoryID" : 2,
        "quantityPerUnit" : "48 - 6 oz jars",
        "unitPrice" : 22,
        "unitsInStock" : 53,
        "unitsOnOrder" : 0,
        "reorderLevel" : 0,
        "discontinued" : "false",
        "name" : "Chef Anton's Cajun Seasoning"
      },
      {
        "productID" : 5,
        "supplierID" : 2,
        "categoryID" : 2,
        "quantityPerUnit" : "36 boxes",
        "unitPrice" : 21.35,
        "unitsInStock" : 0,
        "unitsOnOrder" : 0,
        "reorderLevel" : 0,
        "discontinued" : "true",
        "name" : "Chef Anton's Gumbo Mix"
      },
      {
        "productID" : 6,
        "supplierID" : 3,
        "categoryID" : 2,
        "quantityPerUnit" : "12 - 8 oz jars",
        "unitPrice" : 25,
        "unitsInStock" : 120,
        "unitsOnOrder" : 0,
        "reorderLevel" : 25,
        "discontinued" : "false",
        "name" : "Grandma's Boysenberry Spread"
      },
      {
        "productID" : 7,
        "supplierID" : 3,
        "categoryID" : 7,
        "quantityPerUnit" : "12 - 1 lb pkgs.",
        "unitPrice" : 30,
        "unitsInStock" : 15,
        "unitsOnOrder" : 0,
        "reorderLevel" : 10,
        "discontinued" : "false",
        "name" : "Uncle Bob's Organic Dried Pears"
      },
      {
        "productID" : 8,
        "supplierID" : 3,
        "categoryID" : 2,
        "quantityPerUnit" : "12 - 12 oz jars",
        "unitPrice" : 40,
        "unitsInStock" : 6,
        "unitsOnOrder" : 0,
        "reorderLevel" : 0,
        "discontinued" : "false",
        "name" : "Northwoods Cranberry Sauce"
      },
      {
        "productID" : 9,
        "supplierID" : 4,
        "categoryID" : 6,
        "quantityPerUnit" : "18 - 500 g pkgs.",
        "unitPrice" : 97,
        "unitsInStock" : 29,
        "unitsOnOrder" : 0,
        "reorderLevel" : 0,
        "discontinued" : "true",
        "name" : "Mishi Kobe Niku"
      },
      {
        "productID" : 10,
        "supplierID" : 4,
        "categoryID" : 8,
        "quantityPerUnit" : "12 - 200 ml jars",
        "unitPrice" : 31,
        "unitsInStock" : 31,
        "unitsOnOrder" : 0,
        "reorderLevel" : 0,
        "discontinued" : "false",
        "name" : "Ikura"
      },
      {
        "productID" : 2,
        "supplierID" : 1,
        "categoryID" : 1,
        "quantityPerUnit" : "24 - 12 oz bottles",
        "unitPrice" : 19,
        "unitsInStock" : 17,
        "unitsOnOrder" : 40,
        "reorderLevel" : 25,
        "discontinued" : "false",
        "name" : "Chang"
      },
      {
        "productID" : 3,
        "supplierID" : 1,
        "categoryID" : 2,
        "quantityPerUnit" : "12 - 550 ml bottles",
        "unitPrice" : 10,
        "unitsInStock" : 13,
        "unitsOnOrder" : 70,
        "reorderLevel" : 25,
        "discontinued" : "false",
        "name" : "Aniseed Syrup"
      },
      {
        "productID" : 11,
        "supplierID" : 5,
        "categoryID" : 4,
        "quantityPerUnit" : "1 kg pkg.",
        "unitPrice" : 21,
        "unitsInStock" : 22,
        "unitsOnOrder" : 30,
        "reorderLevel" : 30,
        "discontinued" : "false",
        "name" : "Queso Cabrales"
      },
      {
        "productID" : 12,
        "supplierID" : 5,
        "categoryID" : 4,
        "quantityPerUnit" : "10 - 500 g pkgs.",
        "unitPrice" : 38,
        "unitsInStock" : 86,
        "unitsOnOrder" : 0,
        "reorderLevel" : 0,
        "discontinued" : "false",
        "name" : "Queso Manchego La Pastora"
      },
    ]

    if(!props.showEmployees){
      var data = customers
      var rows = []

    if(props.query === 1){
      rows = customers
    }
    else if(props.query === 2){
      for(let i =0; i<data.length; i++){
        if(data[i].contactTitle === 'Owner'){
          rows.push(data[i])
          //console.log(rows)
        }
      }
    }
    else if(props.query === 3){
      for(let i =0; i<data.length; i++){
        if(data[i].country === 'Mexico'){
          rows.push(data[i])
          //console.log(rows)
        }
      }
    }
    else if(props.query === 4){
      for(let i =0; i<data.length; i++){
        if(data[i].contactTitle === 'Owner' && data[i].city === 'México D.F.'){
          rows.push(data[i])
          //console.log(rows)
        }
      }
    }
    else if(props.query === 5){
      for(let i =0; i<data.length; i++){
          if(data[i].city === 'London'){
            rows.push(data[i])
            //console.log(rows)
          }
      }
    }
    else if(props.query === 6){
      for(let i =0; i<data.length; i++){
          if(data[i].contactTitle === 'Owner' || data[i].city === 'London'){
            rows.push(data[i])
            //console.log(rows)
          }
      }
    }
    }
    else{
      var data = employees
      var rows = []

      if(props.query === 1){
        rows = employees
      }
      else if(props.query === 2){
        for(let i =0; i<data.length; i++){
          if(data[i].discontinued === 'true'){
            rows.push(data[i])
            //console.log(rows)
          }
        }
      }
      else if(props.query === 3){
        for(let i =0; i<data.length; i++){
          if(data[i].unitsOnOrder === 70){
            rows.push(data[i])
            //console.log(rows)
          }
        }
      }
    }

    

  return (
    <div>
    <div className='mx-2 mr-4 relative overflow-x-auto shadow-md sm:rounded-lg'>
      {!props.showEmployees ?
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
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
      </table>
      :
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th className='border border-slate-600 text-center '>Product ID</th>
            <th className='border border-slate-600 text-center '>Supplier ID</th>
            <th className='border border-slate-600 text-center '>Category ID</th>
            <th className='border border-slate-600 text-center '>Quantity/unit</th>
            <th className='border border-slate-600 text-center '>Unit Price</th>
            <th className='border border-slate-600 text-center '>Units In Stock</th>
            <th className='border border-slate-600 text-center '>Units On Order</th>
            <th className='border border-slate-600 text-center '>Reorder Level</th>
            <th className='border border-slate-600 text-center '>Discontinued</th>
            <th className='border border-slate-600 text-center '>Product Name</th>
          </tr>
        </thead>
      <tbody>
        {rows.map(row => (
          <tr key={row.productID}>
            <td className='border border-slate-700 '>{row.productID}</td>
            <td className='border border-slate-700 '>{row.supplierID}</td>
            <td className='border border-slate-700 '>{row.categoryID}</td>
            <td className='border border-slate-700 '>{row.quantityPerUnit}</td>
            <td className='border border-slate-700 '>{row.unitPrice}</td>
            <td className='border border-slate-700 '>{row.unitsInStock}</td>
            <td className='border border-slate-700 '>{row.unitsOnOrder}</td>
            <td className='border border-slate-700 '>{row.reorderLevel}</td>
            <td className='border border-slate-700 '>{row.discontinued}</td>
            <td className='border border-slate-700 '>{row.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
    }
    </div>
    <button className='bg-gray-600 px-6 py-2 rounded-md text-white mt-2 ml-2' onClick={downloadExcel.bind(this,rows)}>Export</button>
    <div className='text-2xl mx-2 my-5 font-semibold text-center bg-gray-600 text-white'>{props.showText}</div>
    <div className='text-2xl mx-2 font-semibold'>Write Your Own Query</div>
    <input className='my-5 mx-2 w-full border border-slate-700 p-2' type='text' placeholder='select * from customer' onChange={handleChange}/>
    <button className='mb-5 mx-2 bg-gray-600 rounded-md text-white py-2 px-6' onClick={displayQuery}>Submit</button>
    {qno!=0 && <OwnQuery queryNo={qno} customers={customers} />}
  </div>
  );
}

export default FilterData