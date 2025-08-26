const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstname : {
        type : String
    },
    secondname : {
        type : String
    },
    email : {
        type : String,
        require : true
    },
    password:{
        type : String,
        require:true

    },
    phone:{
        type : Number,
    }

})
module.exports = mongoose.model("users",userSchema);