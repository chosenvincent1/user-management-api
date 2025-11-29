const express = require("express");
const rateLimit = require("express-rate-limit");
const { register, login } = require("../controllers/authController");

const router = express.Router();

const limiter = rateLimit({
  windowMs: (parseInt(process.env.RATE_LIMIT_WINDOW_MINUTES || "15")) * 60 * 1000,
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || "100"),
  message: { success: false, message: "Too many requests, please try again later" },
});

router.post("/register", limiter, register);
router.post("/login", limiter, login);

module.exports = router;