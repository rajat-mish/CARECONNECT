import express from 'express'
//import { doctorList } from '../controllers/doctorController.js'


import { doctorList, getDoctorById } from '../controllers/doctorController.js';

const doctorRouter=express.Router()

doctorRouter.get('/list', doctorList);
doctorRouter.get('/:id', getDoctorById); // 👈 ADD THIS LINE



//doctorRouter.get('/list',doctorList)




export default doctorRouter








