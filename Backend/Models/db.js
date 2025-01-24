const mongoose = require("mongoose");

// Replace with your local MongoDB URL
const MONGO_URL = "mongodb://127.0.0.1:27017/Pragivo";
module.exports.main = async () => {
    try {
        await mongoose.connect(MONGO_URL).then(res => {
            console.log("Connected to MongoDB");
        });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};
