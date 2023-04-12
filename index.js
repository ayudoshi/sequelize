const sequelize = require('./utils/dbConnection');
const Employee = require('./models/employee');
const EmergContact = require('./models/emergContact');
const express = require('express');
const app = express();

Employee.hasMany(EmergContact);

sequelize.sync()
    .then((result)=>{
        console.log("connected to database");
    })
    .catch((err)=>{
        console.log(err);}
    );


app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.use('/',require('./routes/pages'));

app.listen(4000);