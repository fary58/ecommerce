const Users = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userCtrl = {
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const user = await Users.findOne({ email });
      const hashPass = await bcrypt.hash(password, 10);
      if (user)
        return res.status(400).json({ msg: "Email Already Registered" });
      if (password.length < 6)
        return res
          .status(400)
          .json({ msg: "Password is at least 6 character" });
      const newUser = new Users({
        name,
        email,
        password: hashPass,
      });
      await newUser.save();
      const accesstoken = generateAccessToken({ id: newUser._id });
      const refreshtoken = createRefreshToken({ id: newUser._id });

      res.cookie("refreshtoken", refreshtoken, {
        httpOnly: true,
        path: "/user/refresh_token",
      });

      res.json({ accesstoken });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  //   get: async (req, res) => {
  //     res.setHeader("Content-Type", "text/plain; charset=utf-8");
  //     res.end("getFunction called");
  //   },
};

function generateAccessToken(payload) {
  return jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: "1d" });
}

function createRefreshToken(payload) {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
  }

module.exports = userCtrl;
