import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js'
import {v2 as cloudinary} from 'cloudinary'
import doctorModel from '../models/doctorModel.js'
import appointmentModel from '../models/appointmentModel.js'
import razorpay from 'razorpay'






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

// api to book appointment

// const bookAppointment=async(req,res)=>{
// try {
//   const{userId,docId,slotDate,slotTime}=req.body
//   const docData=await doctorModel.findById(docId).select('-password')

//   if(!docData.available){
//     return res.json({success:false,message:'Doctor not available'})
//   }
//   let slots_booked=docData.slots_booked
//   //checking for slot availability


// if (slots_booked[slotDate]) {
//     if (slots_booked[slotDate].includes(slotTime)) {
//         return res.json({ success: false, message: 'Slot not available' })
//     } else {
//         slots_booked[slotDate].push(slotTime)
//     }
// } else {
//     slots_booked[slotDate] = []
//     slots_booked[slotDate].push(slotTime)
// }

// const userData = await userModel.findById(userId).select('-password')

// delete docData.slots_booked


// const appointmentData = {
//     userId,
//     docId,
//     userData,
//     docData,
//     amount: docData.fees,
//     slotTime,
//     slotDate,
//     date: Date.now()
// }

// const newAppointment = new appointmentModel(appointmentData)
// await newAppointment.save()

// // save new slots data in docData
// await doctorModel.findByIdAndUpdate(docId, { slots_booked })

// res.json({ success: true, message: 'Appointment Booked' })









// } catch (error) {
//    console.log(error);
//     res.status(500).json({ success: false, message: error.message });
// }
// }



const bookAppointment = async (req, res) => {
  try {
    const { docId, slotDate, slotTime } = req.body;
    const userId = req.user.id;  // ✅ get from JWT token

    const docData = await doctorModel.findById(docId).select('-password');
    if (!docData.available) {
      return res.json({ success: false, message: 'Doctor not available' });
    }

    let slots_booked = docData.slots_booked || {};

    // Check for slot collision
    if (slots_booked[slotDate]) {
      if (slots_booked[slotDate].includes(slotTime)) {
        return res.json({ success: false, message: 'Slot not available' });
      } else {
        slots_booked[slotDate].push(slotTime);
      }
    } else {
      slots_booked[slotDate] = [slotTime];
    }

    const userData = await userModel.findById(userId).select('-password');

    // Remove booked slots before saving doctor snapshot
    const { slots_booked: _, ...filteredDocData } = docData.toObject();

    const appointmentData = {
      userId,
      userData,
      docId,
      docData: filteredDocData,
      amount: docData.fees,
      slotTime,
      slotDate,
      date: Date.now()
    };

    await new appointmentModel(appointmentData).save();

    await doctorModel.findByIdAndUpdate(docId, { slots_booked });

    res.json({ success: true, message: 'Appointment Booked' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// api to get user appointment for frontend (my-appointment page)
// const listAppointment=async(req,res)=>{
//   try {
//     const {userId}=req.body
//     const appointments=await appointmentModel.find({userId})
//     res.json({success:true,appointments})
//   } catch (error) {
//     console.log(error)
//     res.json({success:false,message:error.message})
//   }
// }


// const listAppointment = async (req, res) => {
//   try {
//     const userId = req.user.id; // ✅ Proper way to access authenticated user ID

//     const appointments = await appointmentModel.find({ userId });
//     res.json({ success: true, appointments });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };

const listAppointment = async (req, res) => {
  try {
    const userId = req.user.id;
    const appointments = await appointmentModel.find({ userId }).sort({ date: -1 });
    res.json({ success: true, appointments });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};


// api for cancel the appointment



const cancelAppointment = async (req, res) => {
  try {
    const userId = req.user.id;
    const { appointmentId } = req.body;

    const appointment = await appointmentModel.findById(appointmentId);
    if (!appointment) return res.json({ success: false, message: 'Appointment not found' });
    if (appointment.userId.toString() !== userId)
      return res.json({ success: false, message: 'Unauthorized action' });

    await appointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true });

    // normalise helper
    const canon = s => {
      s = s.trim().toUpperCase().replace(/\s+/g, '');
      if (s.includes('AM') || s.includes('PM')) {
        const [, hRaw, m] = s.match(/(\d{1,2}):(\d{2})/);
        let h = +hRaw;
        if (s.endsWith('PM') && h !== 12) h += 12;
        if (s.endsWith('AM') && h === 12) h = 0;
        return `${String(h).padStart(2, '0')}:${m}`;
      }
      return s;
    };

    const { docId, slotDate, slotTime } = appointment;
    const doctor = await doctorModel.findById(docId);

    if (doctor.slots_booked?.[slotDate]) {
      doctor.slots_booked[slotDate] = doctor.slots_booked[slotDate].filter(
        t => canon(t) !== canon(slotTime)
      );
      if (doctor.slots_booked[slotDate].length === 0) delete doctor.slots_booked[slotDate];

      doctor.markModified('slots_booked');          // 👈 important
      await doctor.save();
    }

    res.json({ success: true, message: 'Appointment Cancelled' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: err.message });
  }
};

const razorpayInstance=new razorpay({
  key_id:process.env.RAZORPAY_KEY_ID,
  key_secret:process.env.RAZORPAY_KEY_SECRET
})
// api to make payment of appointment using razorpay

const paymentRazorpay = async (req, res) => {
  try {
    const { appointmentId } = req.body;
    const appointmentData = await appointmentModel.findById(appointmentId);

    if (!appointmentData || appointmentData.cancelled) {
      return res.json({
        success: false,
        message: "Appointment Cancelled or not found"
      });
    }

    // creating options for razorpay payment
    const options = {
      amount: appointmentData.amount * 100,
      currency: process.env.CURRENCY,
      receipt: appointmentId,
    };

    // creation of an order
    const order = await razorpayInstance.orders.create(options);

    res.json({ success: true, order });
  } catch (error) {
    console.log(err);
    res.status(500).json({ success: false, message: err.message });
  }
};


//api to verify the payment of razorpay

const verifyRazorpay=async(req,res)=>{
  try {
    const{
razorpay_order_id
}=req.body
const orderInfo=await razorpayInstance.orders.fetch(
razorpay_order_id
)
if (orderInfo.status === 'paid') {
  await appointmentModel.findByIdAndUpdate(orderInfo.receipt, { payment: true });
  res.json({ success: true, message: "Payment Successful" });
} else {
  res.json({ success: false, message: "Payment failed" });
}

  } catch (error) {
        console.log(err);
    res.status(500).json({ success: false, message: err.message });
  }
}




export {registerUser,loginUser,getProfile,updateProfile,bookAppointment,listAppointment,cancelAppointment,paymentRazorpay,verifyRazorpay}