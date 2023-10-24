require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");

const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/products");

app.get("/", function(req, res){
  res.send("Hi, I am Amar");
});

//middleware or to set a router
app.use("/api/products",products_routes);

const start = async () => {
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, ()=>{
         console.log( `application started ${PORT}`);
        });
    }catch(error){
        console.log(error);
    }
};
 
start();
