const express=require('express')
const router=express.Router();
const userController=require('../controller/userController.js')
const {body}=require('express-validator');
const { authUser } = require('../middlewares/authMiddleware.js');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({ min: 3 }).withMessage('Password must be at least 3 characters long'),
],userController.register)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 3 }),
],userController.login)

router.get('/profile',authUser,userController.profile);

router.get('/logout',authUser,userController.logout);

module.exports=router;