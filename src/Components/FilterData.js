import * as React from 'react';

function FilterData(props){

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

    var data = customers
    var rows = []

    if(props.query === 1){
      rows = customers
    }
    else if(props.query === 2){
      for(let i =0; i<data.length; i++){
        if(data[i].contactTitle === 'Owner'){
          rows.push(data[i])
          console.log(rows)
        }
      }
    }
    else if(props.query === 3){
      for(let i =0; i<data.length; i++){
        if(data[i].country === 'Mexico'){
          rows.push(data[i])
          console.log(rows)
        }
      }
    }

  return (
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
    </table>
  );
}

export default FilterData