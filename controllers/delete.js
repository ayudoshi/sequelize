const EmergContact = require("../models/emergContact");
const Employee = require("../models/employee");

exports.employee=async (req,res)=>{
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

