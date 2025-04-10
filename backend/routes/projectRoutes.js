const express=require('express')
const router=express.Router();
const {body}=require('express-validator');
const { authUser } = require('../middlewares/authMiddleware');
const projectController=require("../controller/projectController.js")


router.post('/addproject',authUser,projectController.Addprojects);

router.get('/getproject',projectController.Getprojects);

router.get('/getproject/:id',projectController.GetOneprojects);

module.exports=router;