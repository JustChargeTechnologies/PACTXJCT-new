const projectModel = require("../models/ProjectModel.js");
const cloudinary = require("cloudinary");

module.exports.Addprojects = async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ message: "File not uploaded" });
    }
    const { projectImg } = req.files;
    const allowedFormats = ["image/png", "image/jpeg", "image/webp"];
    if (!allowedFormats.includes(projectImg.mimetype)) {
      return res.status(400).json({ message: "File Format Not Supported!" });
    }

    const { title, description , aboutProject } = req.body;

    if (!title || !description || !aboutProject) {
      return res.status(400).json({ message: "Fill Full Form" });
    }
    const cloudinaryResponse = await cloudinary.uploader.upload(
      projectImg.tempFilePath
    );

    if (!cloudinaryResponse || cloudinaryResponse.error) {
      console.error(
        "Cloudinary Error:",
        cloudinaryResponse.error || "Unknown Cloudinary Error"
      );
      return res.status(500).json({ message: "Failed to upload image to Cloudinary" });
    }

    // console.log("Uploaded URL:", cloudinaryResponse.secure_url);
    const project = await projectModel.create({
      title,
      description,
      aboutProject,
      projectUrl: {
        public_id: cloudinaryResponse.public_id,
        url: cloudinaryResponse.secure_url,
      },
    });
    // console.log("Project added:", project);
    res.status(200).json({
      message: "New project added",
      project,
    });
  } catch (error) {
    console.error("Error in Addprojects:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports.Getprojects = async (req, res) => {
  try {
    const projects=await projectModel.find({});
    // console.log(projects);
    res.status(200).json(projects);
  } catch (error) {
    console.error("Error in Getprojects:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports.GetOneprojects = async (req, res) => {
  try {
    const {id}=req.params;
    const projects=await projectModel.findById(id);
    // console.log(projects);
    res.status(200).json(projects);
  } catch (error) {
    console.error("Error in GetOneprojects:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
