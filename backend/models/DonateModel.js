const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
  donor: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    country: { type: String, required: true },
    address: {
      street: { type: String, required: true },
      apartment: { type: String },
      city: { type: String, required: true },
      state: { type: String, required: true },
      pincode: { type: String, required: true },
    },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    pan: { type: String },
    notes: { type: String },
  },
  amount: { type: Number, required: true },
  razorpayOrderId: { type: String },
  razorpayPaymentId: { type: String },
  status: {
    type: String,
    enum: ["created", "paid", "failed"],
    default: "created",
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Donation', donationSchema);