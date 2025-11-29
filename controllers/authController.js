// controllers/authController.js
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id.toString(), email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || "1h" }
  );
};

exports.register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Name, email and password are required" });
    }

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(409).json({ success: false, message: "Email already in use" });
    }

    const hashed = await bcrypt.hash(password, 10);

    const created = await User.create({ firstName, lastName, email, password: hashed });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: { id: created._id, firstName: created.firstName, lastName: created.lastName, email: created.email },
    });
  } catch (err) {
    console.error("register error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ success: false, message: "Email and password required" });

    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ success: false, message: "Invalid email or password" });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok)
      return res.status(401).json({ success: false, message: "Invalid email or password" });

    const token = generateToken(user);

    res.json({
      success: true,
      message: "Login successful",
      data: {
        user: { id: user._id, firstName: user.firstName, lastName: user.lastName, email: user.email },
        token,
        expires_in: process.env.JWT_EXPIRES_IN || "1h",
      },
    });
  } catch (err) {
    console.error("login error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};