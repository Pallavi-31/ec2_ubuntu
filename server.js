const express=require("express");
const app=express();
const data =require('./db/db');

const routes=require('./Routes/user');
app.use(express.json());
app.use('/',routes);


app.listen(7001,(req,res)=>{
  console.log("Application listening at 7001");
  connect();
});  
connect();
async function connect(){
  await data.connectToDb();
  console.log("connected");
}
module.exports=app;
