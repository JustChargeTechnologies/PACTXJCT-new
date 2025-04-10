const express=require('express');
const { authUser } = require('../middlewares/authMiddleware');
const router=express.Router();
const newsController=require('../controller/newsController.js')

router.post('/addnews',authUser,newsController.AddNews);

router.get('/getnews',newsController.GetNews);

router.get('/getnews/:id',newsController.GetSingleNews);

module.exports=router;
