const sequelize = require('./utils/dbConnection');
const express = require('express');
const app = express();

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