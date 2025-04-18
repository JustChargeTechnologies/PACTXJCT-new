const express = require('express');
const router = express.Router();
const donationController = require('../controller/donationController.js');

router.post('/create_order', donationController.createOrder);
router.post('/verify_payment', donationController.verifyPayment);

router.get('/getDonation',donationController.getAllDonations);

router.get('/getdonation/:id',donationController.getOneDonations);

module.exports=router;
