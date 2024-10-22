// Require Mongoose
const mongoose = require("mongoose");

// Define schema
const Schema = mongoose.Schema;

const UserModelSchema = new Schema({
  name: String,
  email: String,
  password: String,
  role: Number,
});

// Compile model from schema
const UserModel = mongoose.model("SomeModel", UserModelSchema);
