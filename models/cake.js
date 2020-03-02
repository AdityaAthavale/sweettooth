const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cakeSchema = new Schema({
  baseFlavor: { type: String, required: true },
  fillingFlavour: { type: String, required: true },
  isFondent: { type: Boolean, required: true, default: false },
  isEggless: { type: Boolean, required: true, default: true },
  isPhoto: { type: Boolean, required: true, default: false },
  designSchema: { type: String, default: ""},
  userId: { type: String, default: "The_Head_Shef", required: true},
});

const Cake = mongoose.model("Cake", cakeSchema);

module.exports = Cake;