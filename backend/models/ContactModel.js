const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, 
      minlength: [3, "Name must be at least 3 characters long"],
    },
    email: {
      type: String,
      required: true, 
      unique: true,
      minlength: [3, "Email must be at least 3 characters long"],
    },
    phoneno: {
      type: Number,
      required: true, 
    },
    message: {
      type: String,
      required: true, 
    },
  },
  { timestamps: true }
);

const ContactModel = mongoose.model("ContactVolunteer", ContactSchema);

module.exports = ContactModel;