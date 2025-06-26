import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js'
import {v2 as cloudinary} from 'cloudinary'






//API to register user
const registerUser=async(req,res)=>{
     try {
        const{name,email,password}=req.body;
        if(!name || !email || !password){
            return res.json({success:false,message:"Missing Details"})
        }
        if(!validator.isEmail(email)){
             return res.json({success:false,message:"Enter a valid email"})
        }
        if(password.length <8){
             return res.json({success:false,message:"Enter a strong password"})
        }

        //hashing user password to store in database
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)

        const userData={
            name,
            email,
            password:hashedPassword
        }

      const newUser=new userModel(userData)
      const user=await newUser.save()

      const token =jwt.sign({id:user._id},process.env.JWT_SECRET)
      res.json({success:true,token})








     } catch (error) {
         console.log(error);
    res.status(500).json({ success: false, message: error.message });
     }
}





//API for user login
const loginUser=async(req,res)=>{
    try {
        const {email,password}=req.body
        const user =await userModel.findOne({email})
        if(!user){
           return  res.json({success:false,message:"User does not exist"})
        }
        const isMatch=await bcrypt.compare(password,user.password)
        if(isMatch){
            const token=jwt.sign({id:user._id},process.env.JWT_SECRET)
            res.json({success:true,token})
        }
        else{
             res.json({success:false,message:"Invalid Credentials"})
        }
    } catch (error) {
         console.log(error);
    res.status(500).json({ success: false, message: error.message });
    }
}

// API to get USER PROFILE data
const getProfile=async(req,res)=>{
    try {
        //const{userId}=req.body
        const userId = req.user.id;

        const userData=await userModel.findById(userId).select('-password')
        res.json({success:true,userData})
    } catch (error) {
            console.log(error);
    res.status(500).json({ success: false, message: error.message });
    }
}


//API to update user profile

// const updateProfile=async(req,res)=>{
//     try {
//         const{userId,name,phone,address,dob,gender}=req.body
//         const imageFile=req.file
//         if(!name || !phone || !dob || !gender){
//             return res.json({success:false,message:"Data Missing"})
//         }
//         await userModel.findByIdAndUpdate(userId,{name,phone,address:JSON.parse(address),dob,gender})

//         if(imageFile){
//             // upload image to cloudinary
//             const uploadImage=await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"})
//             const imageURL=uploadImage.secure_url

//             await userModel.findByIdAndUpdate(userId,{image:imageURL})
//         }
//         res.json({success:true,message:"Profile Updated"})

//     } catch (error) {
//         console.log(error);
//     res.json({ success: false, message: error.message });
//     }
// }

// const updateProfile = async (req, res) => {
//   try {
//     const { userId, name, phone, address, dob, gender } = req.body;
//     const imageFile = req.file;

//     if (!name || !phone || !dob || !gender) {
//       return res.json({ success: false, message: "Data Missing" });
//     }

//     await userModel.findByIdAndUpdate(userId, {
//       name,
//       phone,
//       address: JSON.parse(address),
//       dob,
//       gender,
//     });

//     if (imageFile) {
//       const uploadImage = await cloudinary.uploader.upload(imageFile.path, {
//         resource_type: "image",
//       });

//       await userModel.findByIdAndUpdate(userId, {
//         image: uploadImage.secure_url,
//       });
//     }

//     res.json({ success: true, message: "Profile Updated" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };


const updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;                     // ✅ here
    const { name, phone, address, dob, gender } = req.body;
    const imageFile = req.file;

    if (!name || !phone || !dob || !gender) {
      return res.json({ success: false, message: 'Data Missing' });
    }

    // 1) update basic fields
    await userModel.findByIdAndUpdate(
      userId,
      {
        name,
        phone,
        address: JSON.parse(address),
        dob,
        gender,
      },
      { new: true }
    );

    // 2) upload / replace image if provided
    if (imageFile) {
      const upload = await cloudinary.uploader.upload(imageFile.path, {
        resource_type: 'image',
      });
      await userModel.findByIdAndUpdate(userId, { image: upload.secure_url });
    }

    res.json({ success: true, message: 'Profile Updated' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};



export {registerUser,loginUser,getProfile,updateProfile}