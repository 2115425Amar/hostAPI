const Product = require("../models/product");

const getAllProducts = async(req, res)=>{
     const {company, name, feature, sort,select} = req.query;
     const queryObject = {};

    if(company){
        queryObject.company = company;
        //console.log(queryObject);
    }

    if(feature){
        queryObject.feature = feature;
    }

    if(name){
       queryObject.name = {$regex: name, $options: "i" };
      // queryObject.name = name;
    }

    let apiData = Product.find(queryObject);

    if(sort){
        let sortFix=sort.split(",").join(" ");
      //  queryObject.sort =sorttFix;
        apiData = apiData.sort(sortFix);
    }

    // if(select){
    //     let selectFix=select.replace(","," ");
    //     apiData = apiData.select(sortFix);
    // }

    if(select){
       // let selectFix=select.replace(","," ");
        let selectFix=select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }

    console.log(queryObject);

    const myData = await Product.find(queryObject);
    res.status(200).json({ myData });
};


const getAllProductsTesting = async(req, res)=>{
   
    const myData = await Product.find(req.query);
    console.log(
        "searched item is",req.query
    )
   
    res.status(200).json({ myData });
};

module.exports={getAllProducts,getAllProductsTesting}; 