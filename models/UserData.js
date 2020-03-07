const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SweettoothUserSchema = new Schema({
    userName: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: false },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    birthday: {type: Date, required: true}
});

const User = mongoose.model("SweetToothUser", SweettoothUserSchema);

module.exports = User;