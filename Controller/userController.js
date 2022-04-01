const  Users=require('../Model/userModel');
const addUser=(req,res)=>{
    const user=new Users(req.body);
    user.save((err)=>{

        if(err){

            console.log("Error occurred while saving the data", err);

        }else{
            console.log("user document saved",user);
            res.status(200).json({message:"Added user"});
        }
    });

}
const allUsers= (req,res)=>{
    Users.find({},(err,user)=>{

        if(err)

           console.log("Error occurred in fetching the data");

       console.log(user);
       res.status(200).json({message:"Get all users",user});

    })
}
module.exports={addUser,allUsers};