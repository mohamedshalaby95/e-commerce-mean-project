const mongoose = require('mongoose');
require('dotenv/config');

module.exports=()=>{
    
   

 if(process.env.NODE_ENV==='Production'){

    mongoose.connect(process.env.PROD_DB,{  useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true})
        .then(()=>{ console.log('connect mongodb .....')})
        .catch((error)=>{ console.log(`could not connect with mongodb ${error}`)})
 }
 else{
     console.log(process.env.DEV_DB)
    mongoose.connect(process.env.DEV_DB)
        .then(()=>{ console.log(`connect mongodb on ${process.env.DEV_DB}`)})
        .catch((error)=>{
            console.log(`could not connect with mongodb ${error}`)})
            // process.exit(1)
           
 }




}
