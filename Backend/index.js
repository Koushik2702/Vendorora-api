const express =require("express");
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const vendorRoutes=require("./routes/vendorRoutes")
const bodyParser = require('body-parser');
const firmRoutes=require('./routes/firmRoutes')
const productRoutes=require('./routes/productRoutes');
const cors=require("cors");
const path=require('path');



const app=express();
dotEnv.config();
app.use(cors());
const PORT = process.env.PORT ||3000;
mongoose.connect(process.env.MONGO_URI,{
    dbName:"Vendorora"
}).then(()=>{
    console.log("connected to database");
}).catch((err)=>{
    console.log(`Some error occured while connecting to database :${err}`);
})

app.use(bodyParser.json());
app.use('/vendor',vendorRoutes)
app.use('/firm',firmRoutes);
app.use('/product',productRoutes);
app.use('/uploads',express.static('uploads'));

app.listen(PORT, () => {
    console.log(`server started and running at ${PORT}`);
});
app.use('/', (req, res) => {
    res.send("<h1> Welcome to Vendorora");
})
