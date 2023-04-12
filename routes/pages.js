const express = require('express');
const router = express.Router();
const crud = require('../controllers/crud');
// const create = require('../controllers/create');
// const get = require('../controllers/get');
// const del = require('../controllers/delete');
// const update = require('../controllers/update');

router.get('/',(req,res)=>{
    res.send("connected");
});

router.get('/allemp',crud.getAllEmp);
router.get('/getemp',crud.getOneEmp);
router.get('/delete',crud.deleteEmp);

router.post('/update',crud.updateEmp);
router.post('/create',crud.createEmp);

module.exports = router;