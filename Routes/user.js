const express = require('express');
var router = express.Router();

const userController = require('../Controller/userController');
router.post('/AddUsers',userController.addUser);
router.get('/GetUsers',userController.allUsers);

module.exports=router;