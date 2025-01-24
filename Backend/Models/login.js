const mongoose = require("mongoose");
const { Schema } = mongoose;

let loginSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    
});

let loginModel = mongoose.model("loginModel", loginSchema);

module.exports = loginModel;