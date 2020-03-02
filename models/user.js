const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: String,
  birthday: { type: Date, default: Date.now },
  addressLine1: { type: String, required: true },
  addressLine2: { type: String, required: true },
  city: { type: String, required: true },
  zip: { type: String, required: true },
  state: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);

module.exports = User;