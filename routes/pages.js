const express = require('express');
const router = express.Router();
const create = require('../controllers/create');
const get = require('../controllers/get');
const del = require('../controllers/delete');
const update = require('../controllers/update');

router.get('/',(req,res)=>{
    res.send("connected");
});

router.get('/allemp',get.all);
router.get('/getemp',get.oneById);
router.get('/delete',del.employee);

router.post('/update',update.employee);
router.post('/create',create.employee);

module.exports = router;