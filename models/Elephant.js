const mongoose = require("mongoose")
const ElephantSchema = mongoose.Schema({
Elephant_type: String,
Elephant_Size: String,
Elephant_weight: Number
})
module.exports = mongoose.model("Elephant", ElephantSchema)