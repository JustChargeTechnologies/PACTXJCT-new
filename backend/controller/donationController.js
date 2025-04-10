const Razorpay = require("razorpay");
const crypto = require("crypto");
const Donation = require("../models/DonateModel.js");

// Initialize Razorpay instance with your credentials
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Create a new donation order
exports.createOrder = async (req, res) => {
  try {
    const { amount, donor } = req.body;

    // Create order options (converting INR to paise)
    const orderOptions = {
      amount: amount * 100,
      currency: "INR",
      receipt: "receipt_order_" + Date.now(),
      payment_capture: 1,
    };

    // Create order with Razorpay
    const order = await razorpay.orders.create(orderOptions);

    // Save donation details in database
    const donation = new Donation({
      donor,
      amount,
      razorpayOrderId: order.id,
      status: "created",
    });
    await donation.save();

    res.status(200).json({ order, donation });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ error: "Order creation failed" });
  }
};

// Verify the payment received from Razorpay
exports.verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    // Generate expected signature using your key secret
    const generatedSignature = crypto
      .createHmac("sha256", razorpay.key_secret)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");
    if (generatedSignature === razorpay_signature) {
      // Update the donation record to mark it as paid
      const donation = await Donation.findOneAndUpdate(
        { razorpayOrderId: razorpay_order_id },
        { razorpayPaymentId: razorpay_payment_id, status: "paid" },
        { new: true }
      );
      res.json({ success: true, donation });
    } else {
      res
        .status(400)
        .json({ success: false, message: "Payment verification failed." });
    }
  } catch (error) {
    console.error("Error verifying payment:", error);
    res.status(500).json({ error: "Payment verification failed." });
  }
};


exports.getAllDonations = async (req, res) => {
    try {
      const donations = await require('../models/donation').find({});
      res.json({ success: true, donations });
    } catch (error) {
      console.error('Error fetching donation details:', error);
      res.status(500).json({ success: false, message: 'Failed to fetch donation details' });
    }
  };
