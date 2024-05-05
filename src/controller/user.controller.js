const User = require("../model/user.model.js");
const bcrypt = require("bcrypt");

const createAccount = async (req,res) => {
    try {
        const { username,password } = req.body;
        if (!username || !password){
            return res.status(400).json({success:false,message:'bad request'})
        }
        const user = await User.findOne({username});
        if(user){
            return res.status(403).json({success:false,message:'user already exists'})
        }
        const hashedPass = bcrypt.hashSync(password,10);

        await User.create({
            username,
            password : hashedPass
        })

        return res.status(200).json({success:true,message:'user registered successfully'});

    } catch (error) {
        return res.status(500).json({success:false,message:'something went wrong'});
    }
}

const login = async (req,res) => {
    try {
        const { username,password } = req.body;
        if (!username || !password){
            return res.status(400).json({success:false,message:'bad request'})
        }
        const user = await User.findOne({username});
        if(!user){
            return res.status(404).json({success:false,message:'user not found'})
        }
        
        const isPasswordCorrect = bcrypt.compareSync(password,user.password);

        if(!isPasswordCorrect){
            return res.status(405).json({success:false,message:'incorrect password'});
        }

        const data = await User.findById(user._id).select("-password");

        return res.status(200).json({success:true,message:'user logged in successfully',data});

    } catch (error) {
        return res.status(500).json({success:false,message:'something went wrong'});
    }
}

module.exports = {
    createAccount,
    login
}