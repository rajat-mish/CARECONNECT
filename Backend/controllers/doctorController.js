import doctorModel from "../models/doctorModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import appointmentModel from "../models/appointmentModel.js";

const changeAvailability = async (req, res) => {
  try {
    const { docId } = req.body;

    const docData = await doctorModel.findById(docId);
    await doctorModel.findByIdAndUpdate(docId, { available: !docData.available });
    
    res.json({ success: true, message: 'Availability Changed' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}

const doctorList=async(req,res)=>{
  try {
    const doctors=await doctorModel.find({}).select(['-password','-email'])
    res.json({success:true,doctors})
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}


const getDoctorById = async (req, res) => {
  try {
    const { id } = req.params;
    const doctor = await doctorModel.findById(id).select(['-password', '-email']);
    if (!doctor) {
      return res.status(404).json({ success: false, message: 'Doctor not found' });
    }
    res.json({ success: true, doctor });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};



// API for doctor login

const loginDoctor=async(req,res)=>{
  try {
    const {email,password}=req.body
    const doctor=await doctorModel.findOne({email})
    if(!doctor){
      return res.json({success:false,message:"Invalid Credentials"})
    }
    const isMatch=await bcrypt.compare(password,doctor.password)
    if(isMatch){
      const token=jwt.sign({id:doctor._id},process.env.JWT_SECRET)
      res.json({success:true,token})
    }
    else{
       res.json({success:false,message:"Invalid Credentials"}) 
    }
  } catch (error) {
     console.log(error);
    res.json({ success: false, message: error.message });
  }
}


//API to get doctors appointment for doctor panel

// const appointmentsDoctor=async(req,res)=>{
//   try {
//     const {docId}=req.body
//     const appointments=await appointmentModel.find({docId})

//     res.json({success:true,appointments})
//   } catch (error) {
//      console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// }

const appointmentsDoctor = async (req, res) => {
  try {
    const docId = req.doctor.id;  // ✅ this matches the middleware

    const appointments = await appointmentModel.find({ docId }).sort({ date: -1 });

    res.json({ success: true, appointments });
  } catch (error) {
    console.log("Doctor Appointments Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// API to mark appointment complete for doctor panel
// const appointmentComplete=async(req,res)=>{
//   try {
//     const{docId,appointmentId}=req.body
//     const appointmentData=await appointmentModel.findById(appointmentId)
//     if(appointmentData && appointmentData.docId===docId){
//       await appointmentModel.findByIdAndUpdate(appointmentId,{isCompleted:true})
//       return res.json({success:true,message:"Appointment Complete"})
//     }
//     else{
//       return res.json({success:false,message:"Mark Failed"})
//     }
//   } catch (error) {
//      console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// }






// //API to cancel appointment for doctor panel
// const appointmentCancel=async(req,res)=>{
//   try {
//     const{docId,appointmentId}=req.body
//     const appointmentData=await appointmentModel.findById(appointmentId)
//     if(appointmentData && appointmentData.docId===docId){
//       await appointmentModel.findByIdAndUpdate(appointmentId,{cancelled:true})
//       return res.json({success:true,message:"Appointment Cancelled"})
//     }
//     else{
//       return res.json({success:false,message:"Cancellation Failed"})
//     }
//   } catch (error) {
//      console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// }



const appointmentComplete = async (req, res) => {
  try {
    const doctorId = req.doctor.id;           // ← from authDoctor middleware
    const { appointmentId } = req.body;

    const appt = await appointmentModel.findById(appointmentId);
    if (appt && appt.docId.toString() === doctorId) { // compare strings
      await appointmentModel.findByIdAndUpdate(appointmentId, { isCompleted: true });
      return res.json({ success: true, message: 'Appointment Complete' });
    }
    res.json({ success: false, message: 'Mark Failed' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: err.message });
  }
};

const appointmentCancel = async (req, res) => {
  try {
    const doctorId = req.doctor.id;           // ← from middleware
    const { appointmentId } = req.body;

    const appt = await appointmentModel.findById(appointmentId);
    if (appt && appt.docId.toString() === doctorId) {
      await appointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true });
      return res.json({ success: true, message: 'Appointment Cancelled' });
    }
    res.json({ success: false, message: 'Cancellation Failed' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: err.message });
  }
};

//API to get dashboard data for dashboard panel

const doctorDashboard=async(req,res)=>{
  try {
     const docId = req.doctor.id;   
    const appointments = await appointmentModel.find({ docId });

let earnings = 0;
appointments.map((item) => {
  if (item.isCompleted || item.payment) {
    earnings += item.amount;
  }
});

let patients = [];
appointments.map((item) => {
  if (!patients.includes(item.userId)) {
    patients.push(item.userId);
  }
});
const dashData={
  earnings,
  appointments:appointments.length,
  patients:patients.length,
  latestAppointments:appointments.reverse().slice(0,5)

}
res.json({success:true,dashData})

  } catch (error) {
     console.log(err);
    res.status(500).json({ success: false, message: err.message });
  }
}




// API to get doctor profile for doctor panel

const doctorProfile=async(req,res)=>{
  try {
    const docId=req.doctor.id; 
    const profileData=await doctorModel.findById(docId).select('-password')

    res.json({success:true,profileData})
  } catch (error) {
    console.log(err);
    res.status(500).json({ success: false, message: err.message });
  }
}

// API to update the doctor profile 
// const updateDoctorProfile=async(req,res)=>{
//   try {
//      const docId=req.doctor.id; 
//      const {fees,address,available}=req.body
//      await doctorModel.findOneAndUpdate(docId,{fees,address,available})
//      res.json({success:true,message:'Profile Updated'})
//   } catch (error) {
//      console.log(err);
//     res.status(500).json({ success: false, message: err.message });
//   }
// }


const updateDoctorProfile = async (req, res) => {
  try {
    const docId = req.doctor.id;
    const { fees, address, available } = req.body;

    // Make sure to use filter as an object
    await doctorModel.findOneAndUpdate(
      { _id: docId },
      { fees, address, available },
      { new: true } // optional: returns the updated document
    );

    res.json({ success: true, message: 'Profile Updated' });
  } catch (error) {
    console.log(error); // Use 'error', not 'err'
    res.status(500).json({ success: false, message: error.message });
  }
};




export { changeAvailability,doctorList,getDoctorById,loginDoctor,appointmentsDoctor,appointmentCancel,appointmentComplete,doctorDashboard,doctorProfile,updateDoctorProfile};





