 const express=require('express')
const router=express.Router();
const contactController=require("../controller/contactController.js")

router.post('/addcontact',contactController.Addcontact);
router.get('/getcontact',contactController.Getcontact);

module.exports=router;
