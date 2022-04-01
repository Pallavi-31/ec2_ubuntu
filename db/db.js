const mongoose = require('mongoose');
class DatabaseConnection{
    async connectToDb(){
        try{
            const MONGO_URI=`mongodb+srv://Pallavi:avi@trail.bfeji.mongodb.net/tests`
            await mongoose.connect(MONGO_URI);
            console.log("database connected");
        }catch(err){
            console.log(err);
        }
    }
    
}
module.exports=new DatabaseConnection();
