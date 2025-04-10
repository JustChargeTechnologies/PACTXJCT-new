const mongoose = require("mongoose");

const VolunteerSchema = new mongoose.Schema(
  {
    fullname: {
      firstname: {
        type: String,
        required: true, 
        minlength: [3, "First name must be at least 3 characters long"],
      },
      lastname: {
        type: String,
      },
    },
    email: {
      type: String,
      required: true, 
      minlength: [3, "Email must be at least 3 characters long"],
    },
    subject: {
      type: String,
      required: true, 
    },
    message: {
      type: String,
      required: true, 
    },
    role: {
      type: String,
      required: true, 
      enum: ['Volunteer', 'Help'],
    },
  },
  { timestamps: true }
);

VolunteerSchema.index({ email: 1, role: 1 }, { unique: true });
const VolunteerModel = mongoose.model("Volunteer", VolunteerSchema);

module.exports = VolunteerModel;