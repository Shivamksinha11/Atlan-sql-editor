# Online SQL Editor

This Project is a front-end application of an online SQL editor built specifically to fulfill a task given by Atlan.

### Page load time: 

<img src="https://imgur.com/HKAY5BN.png">

## Technologies used :-

Following technologies were used for the completion of this project:

    1. ReactJs
    2. Tailwind CSS

## Packages used :-

    1. react-code-blocks:
    2. xlsx

## Features :-

    1. The top-most section consists of a navbar which allows the users to easily switch amongst multiple tables 
       (In this case 'Customers' and 'Products')

    2. The next section contains an editor which displays the current query of the corresponding table put on view. Below this
       a list of few queries is present from which the user can select a query which they want to execute.

    3. Then on the right side of the page, a table is displayed which shows the result of the query. There is also a button
       which allows the user to download the table as a xlsx file.

    4. The bottom section contains a button and an input form which allows the user to write a query and execute it and display 
       the result at the bottom.
       Few of the mock queries are:

            a. select * from customers
            b. select * from customers where contactTitle= 'Owner'
            c. select * from customers where country= 'Mexico'
            d. select * from customers where contactTitle= 'Owner' and city='Mexico D.F.'
            e. select * from customers where city='London'
            f. select * from customers where contactTitle= 'Owner' or city='London'

## Performance

<img src="https://imgur.com/43AYrhu.png"/>

## Optimization

    1. Didn't use any third party libraries.
    2. Used only the core features of ReactJs.
    3. Used only the core features of Tailwind CSS.
    
## Project overview

<img src="https://imgur.com/4gNwIxh.png">

<img src="https://imgur.com/VHk4AiY.png" width="45%" height="100%"> <img src="https://imgur.com/B4cO3u5.png" style="margin-left: 5%" width="45%" height="100%">




