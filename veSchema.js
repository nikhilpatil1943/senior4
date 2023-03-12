const mongoose=require("mongoose")
const mycollectionSchema = new mongoose.Schema({
plate:{
    type:String,
    required:true
},
date:{
    type:String,
    required:true
}
})
const Mycollection=mongoose.model('MYCOLLECTION',mycollectionSchema)
module.exports = Mycollection