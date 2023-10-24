require("dotenv").config();
const connectDB = require("./connect");
const Product = require("../models/product");

const ProductJson = require("../products.json");

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        await Product.deleteMany();         //previous data will delete
        await Product.create(ProductJson);
        console.log("success");
    }
    catch (error) {
        console.log(error);
    }
};

start();