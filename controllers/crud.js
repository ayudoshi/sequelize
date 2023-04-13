const EmergContact = require("../models/emergContact");
const Employee = require("../models/employee");

Employee.hasMany(EmergContact);

exports.createEmp = async (req, res) => {

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
    ).catch((err)=>{
        console.log(err);
    });

    const emerg2 = await emp.createEmergContact(
        {
            name: emergc2.name,
            phone: emergc2.phone,
            relation: emergc2.relation,
            relationType: emergc2.relationType
        }
    ).catch((err)=>{
        console.log(err);
    });

    res.send("Created employee : "+name);
};

exports.getAllEmp = async (req,res)=>{
    const page = Number.parseInt(req.query.page);
    const size = Number.parseInt(req.query.size);

    const employees= await Employee.findAndCountAll({
        include: [{
            model: EmergContact
        }],
        limit: size,
        offset: page * size
    });

    res.send({
        content:employees.rows,
        // totalPages:employees.count/size
    });
};

exports.getOneEmp = async (req,res)=>{
    const emp_id = Number.parseInt(req.query.id);

    const employee = await Employee.findOne({
        include: [{
            model: EmergContact
        }],
        where:{id:emp_id}
    });

    res.send(employee);
};

exports.updateEmp = async(req,res)=>{
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

exports.deleteEmp=async (req,res)=>{
    const emp_id = Number.parseInt(req.query.id);

    const emerg = await EmergContact.destroy({
        where:{employeeId:emp_id},
        force:true
    });

    const employee = await Employee.destroy({
        where:{id:emp_id},
        force:true
    });

    res.send("deleted successfully");
};