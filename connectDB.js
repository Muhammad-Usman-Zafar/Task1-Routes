const mongoose = require("mongoose");

const connectDB = async ()=>{
try {
    await mongoose.connect(process.env.CONNECT_STRING );
    console.log("Connection Established.");
} catch (error) {
    console.log(error);
    process.exit(1);
}
   
}

module.exports = connectDB;