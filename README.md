# Sequelize
This is a demonstration of the CRUD operations in relational table with the help of 'Sequelize ORM' package.
## Description
<p>
In this project we have two tables one is employee and the other is emergerncey contacts.
Emergencey contacts table is the relational table of the employee table as it store the emergency contacts of the employee.
We have employee id as primary key in employee table and the same key as foregin key in emergency contacts table.
I have used sequelize hasMany() function to map both the tables.
Basic CRUD operations have been demonstrated.
Pagination have also been included.
</p>

## Get requests

<p>
/allemp?page=0&size=1 : get list of all employees with page and size parameters. Here page 0 and size 1 means 1 page with 1 result from start.<br>
/allemp?page=1&size=1 : Here page 1 means page 2 with one result skipping page*size entries. <br>
/getemp?id=1 : get one employee data in this example with id 1.<br>
/delete?id=1 : delete one employee in thsis example with id 1.<br>
</p>

## Post requests

<p> 
/update : update one employee with provided id and data(json format) keeping the id same.<br>
/create : create one employee with provided data(json format).<br>
</p>

### For database creation below form has been taken into consideration<br>
https://www.formpl.us/templates/employee-contact-form
