const express=require('express')
const router=express.Router();
const volunteerController=require("../controller/volunteerController.js")

router.post('/addvolunteer',volunteerController.AddVolunteer);
router.get('/getvolunteer',volunteerController.GetVolunteer);
router.delete('/deletevolunteer/:id',volunteerController.DeleteVolunteer);

module.exports=router;