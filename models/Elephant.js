const mongoose = require("mongoose")
const ElephantSchema = mongoose.Schema({
Elephant_type: {
    type:String,
    required:true,
},
Elephant_Size: {
    type:String,
    required:true,
},
Elephant_weight: {
    type:Number,
    required:true,
    min:100,max:10000,
}
})
module.exports = mongoose.model("Elephant", ElephantSchema)