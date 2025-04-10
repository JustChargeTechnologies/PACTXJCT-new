const express=require('express')
const router=express.Router();
const helpController=require('../controller/helpController.js')


router.post('/addhelp',helpController.AddHelp);
router.get('/gethelp',helpController.GetHelp);

module.exports=router;