const Users = require("../models/userModel");

const userCtrl = {
  register: async (req, res) => {
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("Hello World!");
  },
  get: async (req, res) => {
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("getFunction called");
  },
};


module.exports = userCtrl