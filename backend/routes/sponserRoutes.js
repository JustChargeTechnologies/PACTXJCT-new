const express=require('express')
const router = express.Router();
const sponserControler=require('../controller/sponserController.js')


router.post('/addSponser',sponserControler.AddSponser);
router.get('/getSponser',sponserControler.GetSponser);
router.get('/getSponsor/:id',sponserControler.GetSingleSponsor);


module.exports=router;