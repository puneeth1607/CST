const mongoose = require('mongoose')

//create the schema

const logschema   =  new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    designation:{
        type:String,
        required:true
    }, 
     gender:{
        type:String,
        required:true
    },
    cource:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

// export schema
module.exports = mongoose.model('logdata',logschema)