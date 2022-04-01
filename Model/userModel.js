const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const UserSchema=new Schema({
    name:String,
    age:Number,
    email:String
},{collection:"Users"}
);
let mongooseHidden = require("mongoose-hidden")();

UserSchema.set("toJSON",{

    virtuals:true,

});
UserSchema.plugin(mongooseHidden);
module.exports=mongoose.model("Users",UserSchema);