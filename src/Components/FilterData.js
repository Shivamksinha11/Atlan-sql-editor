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
                "region" : "NULL",
                "postalCode" : "WA1 1DP",
                "country" : "UK",
                "phone" : "(171) 555-7788",
                "fax" : "(171) 555-6750"
            },
            {
              "customerID" : "BERGS",
              "companyName" : "Berglunds snabbköp",
              "contactName" : "Christina Berglund",
              "contactTitle" : "Order Administrator",
              "address" : "Berguvsvägen  8",
              "city" : "Luleå",
              "region" : "NULL",
              "postalCode" : "S-958 22",
              "country" : "Sweden",
              "phone" : "0921-12 34 65",
              "fax" : "(171) 555-6750"


              
            },
            {
              "customerID" : "BLAUS",
              "companyName" : "Blauer See Delikatessen",
              "contactName" : "Hanna Moos",
              "contactTitle" : "Sales Representative",
              "address" :  "Forsterstr. 57",
                "city" : "Mannheim",
                "region" : "NULL",
                "postalCode" : 68306,
                "country" : "Germany",
                "phone" : "0621-08460",
                "fax" : "(171) 555-6750"


              
            },
            {
              "customerID" : "BLONP",
              "companyName" : "Blondesddsl père et fils",
              "contactName" : "Frédérique Citeaux",
              "contactTitle" : "Marketing Manager",
              "address" :  "24 place Kléber",
                "city" : "Strasbourg",
                "region" : "NULL",
                "postalCode" : 67000,
                "country" : "France",
                "phone" : "88.60.15.31",
                "fax" : "(171) 555-6750"


            },
            {
              "customerID" : "BOLID",
              "companyName" : "Bólido Comidas preparadas",
              "contactName" : "Martín Sommer",
              "contactTitle" : "Owner",
              "address" :  "67C Araquil",
                "city" : "Madrid",
                "region" : "NULL",
                "postalCode" : 28023,
                "country" : "Spain",
                "phone" : "(91) 555 22 82",
                "fax" : "(171) 555-6750"


            },
            {
              "customerID" : "BONAP",
              "companyName" : "Bon app'",
              "contactName" : "Laurence Lebihan",
              "contactTitle" : "Owner",
              "address" :  "12 rue des Bouchers",
                "city" : "Marseille",
                "region" : "NULL",
                "postalCode" : 13008,
                "country" : "France",
                "phone" : "91.24.45.40",
                "fax" : "(171) 555-6750"


            },
            {
              "customerID" : "ANTON",
              "companyName" : "Antonio Moreno Taquería",
              "contactName" : "Antonio Moreno",
              "contactTitle" : "Owner",
              "address" :  "Mataderos  2312",
                "city" : "México D.F.",
                "region" : "NULL",
                "postalCode" : 5023,
                "country" : "Mexico",
                "phone" : "(5) 555-3932",
                "fax" : "(171) 555-6750"


            },
            {
              "customerID" : "ANATR",
              "companyName" : "Ana Trujillo Emparedados y helados",
              "contactName" : "Ana Trujillo",
              "contactTitle" : "Owner",
              "address" :  "Avda. de la Constitución 2222",
                "city" : "México D.F.",
                "region" : "NULL",
                "postalCode" : 5021,
                "country" : "Mexico",
                "phone" : "(5) 555-4729",
                "fax" : "(171) 555-6750"


            },
            {
              "customerID" : "CACTU",
              "companyName" : "Cactus Comidas para llevar",
              "contactName" : "Patricio Simpson",
              "contactTitle" : "Sales Agent",
              "address" :  "Cerrito 333",
                "city" : "Buenos Aires",
                "region" : "NULL",
                "postalCode" : 1010,
                "country" : "Argentina",
                "phone" : "(1) 135-5555",
                "fax" : "(171) 555-6750"


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
        <div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Customer ID</td>
                            <td>Company Name</td>
                            <td>Contact Name</td>
                            <td>Contact Title</td>
                            <td>Address</td>
                            <td>City</td>
                            <td>Region</td>
                            <td>Postal Code</td>
                            <td>Country</td>
                            <td>Phone</td>
                            <td>Fax</td>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(row => (
                            <tr key={row.customerID}>
                                <td>{row.customerID}</td>
                                <td>{row.companyName}</td>
                                <td>{row.contactName}</td>
                                <td>{row.contactTitle}</td>
                                <td>{row.address}</td>
                                <td>{row.city}</td>
                                <td>{row.region}</td>
                                <td>{row.postalCode}</td>
                                <td>{row.country}</td>
                                <td>{row.phone}</td>
                                <td>{row.fax}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

}

export default FilterData