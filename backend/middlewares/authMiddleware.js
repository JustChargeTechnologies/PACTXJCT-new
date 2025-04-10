
const jwt = require("jsonwebtoken");
const userModel = require("../models/UserModel");

module.exports.authUser = async (req, res, next) => {
  try {
    const token =req.cookies?.token || req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Unauthorized: No token provided" });
    }
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      console.error("JWT Verification Error:", error.message);
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
    const user = await userModel.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ message: "Unauthorized: User not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.error("authUser Middleware Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

