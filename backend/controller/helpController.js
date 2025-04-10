const VolunteerModel = require("../models/VolunteerModel.js");

  module.exports.AddHelp = async (req, res) => {
    try {
        const { firstname,lastname, email, subject, message } = req.body;
        const isHelpAlready = await VolunteerModel.findOne({ email ,role:"Help"});
        if (isHelpAlready) {
            return res.status(400).json({ message: "Help already exist" });
        }
        const help = await VolunteerModel.create({
            fullname: {
                firstname: firstname,
                lastname: lastname,
            },
            email,
            subject,
            message,
            role: "Help"
        });
        res.status(200).json({ message: "Help added", help});
    } catch (error) {
        console.error("AddHelp Error:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports.GetHelp = async (req, res) => {
    try {
        const helps = await VolunteerModel.find({ role: "Help" });
        res.status(200).json(helps);
    } catch (error) {
        console.error("GetHelp Error:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}
