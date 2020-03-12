const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CakeSchema = new Schema({
    occassion: { type: String, required: true },
    baseType: { type: String, required: true },
    baseFlavor: { type: String, required: true },
    decorationType: { type: String, required: true },
    decorationFlavor: { type: String, required: true },
    deliveryDate: {type: Date, required: true},
    userId: {type: String, required: true},
    userDrawing: {type: String, required: false},
    image: {type: String, required: false}
});

const Cake = mongoose.model("Cake", CakeSchema);

module.exports = Cake;
