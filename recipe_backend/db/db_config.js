const mongoose = require('mongoose');

const connectMongo=()=>{connectMongo
    mongoose.connect("mongodb://localhost:27017/recipe")
    .then(()=>console.log("Connected to db"))
    .catch((err)=>console.log(err))
}
module.exports=connectMongo