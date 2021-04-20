require("dotenv").config();

const productData=require("./data/product");
const connectDB=require("./config/db");
const Product=require("./models/product")

connectDB();

const importData=async()=>{
    try{
        await Product.deleteMany({});
        await Product.insertMany(productData);

        console.log("Data Import Successfully")

        process.exit();
    }
    catch(error){
        console.log("Error in data importing")
        process.exit(1);
    }
}

importData()