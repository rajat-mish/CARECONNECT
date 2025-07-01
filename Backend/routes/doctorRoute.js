import express from 'express'
//import { doctorList } from '../controllers/doctorController.js'


import { appointmentCancel, appointmentComplete, appointmentsDoctor, doctorDashboard, doctorList, doctorProfile, getDoctorById,loginDoctor, updateDoctorProfile } from '../controllers/doctorController.js';
import authDoctor from '../middlewares/authDoctor.js';

const doctorRouter=express.Router()

doctorRouter.get('/list', doctorList);
 // 👈 ADD THIS LINE
doctorRouter.post('/login',loginDoctor)
doctorRouter.get('/appointments',authDoctor,appointmentsDoctor)
doctorRouter.get('/dashboard',authDoctor,doctorDashboard)

doctorRouter.post('/complete-appointment',authDoctor,appointmentComplete)
doctorRouter.post('/cancel-appointment',authDoctor,appointmentCancel)
doctorRouter.get('/dashboard',authDoctor,doctorDashboard)
doctorRouter.get('/profile',authDoctor,doctorProfile)
doctorRouter.post('/update-profile',authDoctor,updateDoctorProfile)



doctorRouter.get('/:id', getDoctorById);




export default doctorRouter








