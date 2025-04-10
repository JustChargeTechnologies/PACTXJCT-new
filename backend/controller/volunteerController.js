const VolunteerModel = require("../models/VolunteerModel.js");

module.exports.AddVolunteer = async (req, res) => {
  try {
    const { firstname ,lastname, email, subject, message,role } = req.body;
    const isVolunteerAlready = await VolunteerModel.findOne({ email ,role:"Volunteer"});
    if (isVolunteerAlready) {
      return res.status(400).json({ message: "Volunteer already exist" });
    }
    const volunteer = await VolunteerModel.create({
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email,
      subject,
      message,
      role: "Volunteer"
    });
    res.status(200).json({ message: "Volunteer added", volunteer });
  } catch (error) {
    console.error("Error in GetVolunteers:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports.GetVolunteer = async (req, res) => {
  try {
    const volunteers = await VolunteerModel.find({role : "Volunteer"});
    res.status(200).json(volunteers);
  } catch (error) {
    console.error("Error in GetVolunteers:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
