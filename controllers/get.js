const EmergContact = require("../models/emergContact");
const Employee = require("../models/employee");

exports.all = async (req,res)=>{
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

exports.oneById = async (req,res)=>{
    const emp_id = Number.parseInt(req.query.id);

    const employee = await Employee.findOne({
        include: [{
            model: EmergContact
        }],
        where:{id:emp_id}
    });

    res.send(employee);
};