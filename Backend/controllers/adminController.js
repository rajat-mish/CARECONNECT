
import validator from 'validator'
import bcrypt from 'bcrypt'
import {v2 as cloudinary} from 'cloudinary'
import doctorModel from '../models/doctorModel.js'
import jwt from 'jsonwebtoken'
import appointmentModel from '../models/appointmentModel.js'

// API FOR ADDING THE DOCTORS

const addDoctor=async(req,res)=>{
    try{
const {name,email,password,speciality,degree,experience,about ,fees,address}=req.body;
const imageFile=req.file 

   if(!name || !email||!password||!speciality||!degree||!experience||!about||!fees||!address){
    return res.json({success:false,message:"Missing Details"})
   }
  // validate the email

  if(!validator.isEmail(email)){
    return res.json({success:false,message:"Please Enter a Valid Email"})
  }

  // validate the password
   if(password.length<6){
    return res.json({success:false,message:"Please Enter a Strong Password"})
  }

  // hashing the doctors password to store in db
  const salt =await bcrypt.genSalt(10)
  const hashedPassword=await bcrypt.hash(password,salt)


  // upload image to cloudinary
  const imageUpload=await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"})
  const imageUrl=imageUpload.secure_url

  const doctorData={
        name,
        email,
        image:imageUrl,
        password:hashedPassword,
        speciality,
        degree,
        experience,
        about,
        fees,
        address:JSON.parse(address),
        date:Date.now()
  }
  const newDoctor=new doctorModel(doctorData)
  await newDoctor.save()

  res.json({success:true,message:"Doctor added"})


    }
    catch(error){
      console.log(error)
      res.json({success:false,message:error.message})
    }
}




// API for admin login

const loginAdmin=async(req,res)=>{
    try {
        const {email,password}=req.body
        if(email === process.env.ADMIN_EMAIL && password===process.env.ADMIN_PASSWORD){
        const token=jwt.sign(email+password,process.env.JWT_SECRET)
        res.json({success:true,token})
        }
        else{
            res.json({success:false,message:"Invalid Credentials"})
        }
    } catch (error) {
            console.log(error)
      res.json({success:false,message:error.message})
    }
}




// API to get all doctors list for admin panel

const allDoctors=async(req,res)=>{
  try {
    const doctors=await doctorModel.find({}).select('-password')
    res.json({success:true,doctors})
  } catch (error) {
         console.log(error)
      res.json({success:false,message:error.message})
  }
}

// API to get all appointments list

const appointmentsAdmin=async(req,res)=>{
  try {
    const appointments=await appointmentModel.find({})
    res.json({success:true,appointments})
  } catch (error) {
     console.log(error)
      res.json({success:false,message:error.message})
  }
}

// api to cancel the appointments from admin side

const appointmentCancel = async (req, res) => {
  try {
    
    const { appointmentId } = req.body;

    const appointment = await appointmentModel.findById(appointmentId);
    if (!appointment) return res.json({ success: false, message: 'Appointment not found' });
   

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



export {addDoctor,loginAdmin,allDoctors,appointmentsAdmin,appointmentCancel}