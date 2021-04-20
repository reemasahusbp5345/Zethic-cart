const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            "mongodb://localhost/shop",
            {
              useCreateIndex: true,
              useNewUrlParser: true,
              useUnifiedTopology: true,
            } 
          );
    }
    catch (err) {
        console.log(`Error : ${err.message}`);
        process.exit(1)
    }
}
module.exports = connectDB;