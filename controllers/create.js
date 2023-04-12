const Employee = require('../models/employee');
const EmergContact = require('../models/emergContact');

exports.employee = async (req, res) => {

    const {name,jobTitle,email,phone,address,city,state,emergc1,emergc2}=req.body;

    const emp = await Employee.create(
        {
            name: name,
            jobTitle: jobTitle,
            email: email,
            phone: phone,
            address: address,
            city: city,
            state: state
        }
    );

    const emerg1 = await emp.createEmergContact(
        {
            name: emergc1.name,
            phone: emergc1.phone,
            relation: emergc1.relation,
            relationType: emergc1.relationType
        }
    );

    const emerg2 = await emp.createEmergContact(
        {
            name: emergc2.name,
            phone: emergc2.phone,
            relation: emergc2.relation,
            relationType: emergc2.relationType
        }
    );

    res.send("Created employee : "+name);
}