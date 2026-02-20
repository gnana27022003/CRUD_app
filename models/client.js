const mongoose = require('mongoose');
const client = new mongoose.Schema({
    name:{type:String,require:true},
    company:{type:String,require:true},
    email:{type:String,require:true,unique:true},
    phone:{type:Number,require:true,unique:true},
    status:{type:String,enum:["active","inactive"]},
    createdAt:{type:Date,default:Date.now}
})

module.exports = mongoose.model('clients',client)
