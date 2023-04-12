const EmergContact = require("../models/emergContact");
const Employee = require("../models/employee");

exports.employee= async(req,res)=>{
    const {id,name,jobTitle,email,phone,address,city,state,emergc1,emergc2}=req.body;

    const emp = await Employee.update(
        {
            name: name,
            jobTitle: jobTitle,
            email: email,
            phone: phone,
            address: address,
            city: city,
            state: state
        },
        {
            where:{id:id}
        }
    );

    const emerg1 = await EmergContact.update(
        {
            name: emergc1.name,
            phone: emergc1.phone,
            relation: emergc1.relation,
            relationType: emergc1.relationType
        },
        {
            where:{
                employeeId:id,
                relationType:"primary"
            }
        }
    );

    const emerg2 = await EmergContact.update(
        {
            name: emergc2.name,
            phone: emergc2.phone,
            relation: emergc2.relation,
            relationType: emergc2.relationType
        },
        {
            where:{
                employeeId:id,
                relationType:"secondary"
            }
        }
    );

    res.send("Updated employee");
};