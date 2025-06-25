import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { useState } from "react";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import axios from 'axios'

const AddDoctor = () => {
  const [docImg, setDocImg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("1 Year");
  const [fees, setFees] = useState("");
  const [about, setAbout] = useState("");
  const [speciality, setSpeciality] = useState("General physician");
  const [degree, setDegree] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const { backendUrl, aToken } = useContext(AdminContext);
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (!docImg) {
        return toast.error("Image not selected ");
      }
      const formData = new FormData();
      formData.append("image", docImg);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("experience", experience);
      formData.append("fees", Number(fees));
      formData.append("about", about);
      formData.append("speciality", speciality);
      formData.append("degree", degree);
      formData.append(
        "address",
        JSON.stringify({ line1: address1, line2: address2 })
      );

     // console log formdata
     formData.forEach((value,key) => {
      console.log(`${key} :${value}`)
     });

     const {data}=await axios.post(backendUrl+'/api/admin/add-doctor',formData,{headers:{aToken}})

     if(data.success){
      toast.success(data.message)
      setDocImg(false)
      setAbout('')
      setName('')
      setFees('')
      setDegree('')
      setEmail('')
      setPassword('')
      setAddress1('')
      setAddress2('')

     }
     else{
      toast.error(data.message)
     }


    } catch (error) {
      toast.error(error.message)
      console.log(error)
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="m-5 w-full">
      <p className="mb-3 text-lg font-medium">Add Doctor</p>

      <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
        <div className="flex items-center gap-4 mb-8 text-gray-500">
          <label htmlFor="doc-img">
            <img
              className="w-16 bg-gray-100 rounded-full cursor-pointer"
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setDocImg(e.target.files[0])}
            type="file"
            id="doc-img"
            hidden
          />
          <p>
            Upload doctor <br /> picture
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
          <div className="w-full lg:flex-1 flex flex-col gap-4 ">
            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor Name</p>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="border rounded px-3 py-2 "
                type="text"
                placeholder="Name"
                required
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor Email</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="border rounded px-3 py-2 "
                type="email"
                placeholder="Email"
                required
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor Password</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="border rounded px-3 py-2 "
                type="password"
                placeholder="Password"
                required
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Experience</p>
              <select
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
                className="border rounded px-3 py-2 "
                name=""
                id=""
              >
                <option value="1 Year">1 Year</option>
                <option value="2 Year">2 Year</option>
                <option value="3 Year">3 Year</option>
                <option value="4 Year">4 Year</option>
                <option value="5 Year">5 Year</option>
                <option value="6 Year">6 Year</option>
                <option value="7 Year">7 Year</option>
                <option value="8 Year">8 Year</option>
                <option value="9 Year">9 Year</option>
                <option value="10 Year">10 Year</option>
              </select>
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Fees</p>
              <input
                onChange={(e) => setFees(e.target.value)}
                value={fees}
                className="border rounded px-3 py-2 "
                type="number"
                placeholder="Fees"
                required
              />
            </div>
          </div>

          <div className="w-full lg:flex-1 flex flex-col gap-4 ">
            <div className="flex-1 flex flex-col gap-1">
              <p>Speciality</p>
              <select
                onChange={(e) => setSpeciality(e.target.value)}
                value={speciality}
                className="border rounded px-3 py-2 "
                name=""
                id=""
              >
                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Education</p>
              <input
                onChange={(e) => setDegree(e.target.value)}
                value={degree}
                className="border rounded px-3 py-2 "
                type="text"
                placeholder="Education"
                required
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Address</p>
              <input
                onChange={(e) => setAddress1(e.target.value)}
                value={address1}
                className="border rounded px-3 py-2 "
                type="text"
                placeholder="address 1"
                required
              />
              <input
                onChange={(e) => setAddress2(e.target.value)}
                value={address2}
                className="border rounded px-3 py-2 "
                type="text"
                placeholder="address 2"
                required
              />
            </div>
          </div>
        </div>
        <div>
          <p className="mt-4 mb-2">About Doctor</p>
          <textarea
            onChange={(e) => setAbout(e.target.value)}
            value={about}
            className="w-full px-4 pt-2 border rounded"
            placeholder=" Write About Doctor"
            rows={5}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-primary px-10 py-3 mt-4 text-white rounded-full cursor-pointer"
        >
          Add doctor
        </button>
      </div>
    </form>
  );
};

export default AddDoctor;

// import React from 'react';
// import { assets } from '../../assets/assets';

// const AddDoctor = () => {
//   return (
//     <form className="bg-white p-6 sm:p-10 rounded-md shadow-md max-w-5xl mx-auto mt-6">
//       <p className="text-xl font-semibold mb-6">Add Doctor</p>

//       <div className="flex flex-col sm:flex-row gap-8">
//         {/* Upload Image */}
//         <div className="flex flex-col items-center gap-2">
//           <label htmlFor="doc-img" className="cursor-pointer">
//             <img
//               src={assets.upload_area}
//               alt="Upload doctor"
//               className="w-24 h-24 object-contain"
//             />
//           </label>
//           <input type="file" id="doc-img" hidden />
//           <p className="text-sm text-gray-500 text-center leading-4">
//             Upload doctor <br /> picture
//           </p>
//         </div>

//         {/* Form Fields */}
//         <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div>
//             <p className="text-sm font-medium mb-1">Doctor Name</p>
//             <input
//               type="text"
//               placeholder="Name"
//               required
//               className="w-full border rounded px-3 py-2 text-sm"
//             />
//           </div>

//           <div>
//             <p className="text-sm font-medium mb-1">Speciality</p>
//            <select className="w-full border rounded px-3 py-2 text-sm">
//   <option>General physician</option>
//   <option>Gynecologist</option>
//   <option>Dermatologist</option>
//   <option>Pediatricians</option>
//   <option>Neurologist</option>
//   <option>Gastroenterologist</option>
// </select>

//           </div>

//           <div>
//             <p className="text-sm font-medium mb-1">Doctor Email</p>
//             <input
//               type="email"
//               placeholder="Your email"
//               required
//               className="w-full border rounded px-3 py-2 text-sm"
//             />
//           </div>

//           <div>
//             <p className="text-sm font-medium mb-1">Education</p>
//             <input
//               type="text"
//               placeholder="Education"
//               className="w-full border rounded px-3 py-2 text-sm"
//             />
//           </div>

//           <div>
//             <p className="text-sm font-medium mb-1">Doctor Password</p>
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full border rounded px-3 py-2 text-sm"
//             />
//           </div>

//           <div>
//             <p className="text-sm font-medium mb-1">Address</p>
//             <input
//               type="text"
//               placeholder="Address 1"
//               className="w-full border rounded px-3 py-2 text-sm mb-2"
//             />
//             <input
//               type="text"
//               placeholder="Address 2"
//               className="w-full border rounded px-3 py-2 text-sm"
//             />
//           </div>

//           <div>
//             <p className="text-sm font-medium mb-1">Experience</p>
//             <select className="w-full border rounded px-3 py-2 text-sm">
//               <option>0-1 years</option>
//               <option>2-5 years</option>
//               <option>5+ years</option>
//             </select>
//           </div>

//           <div>
//             <p className="text-sm font-medium mb-1">Fees</p>
//             <input
//               type="number"
//               placeholder="Your fees"
//               className="w-full border rounded px-3 py-2 text-sm"
//             />
//           </div>

//           {/* About */}
//           <div className="sm:col-span-2">
//             <p className="text-sm font-medium mb-1">About Me</p>
//             <textarea
//               rows="4"
//               placeholder="Write about yourself"
//               className="w-full border rounded px-3 py-2 text-sm"
//             ></textarea>
//           </div>
//         </div>
//       </div>

//       {/* Submit button */}
//       <div className="mt-6">
//         <button
//           type="submit"
//           className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm"
//         >
//           Add doctor
//         </button>
//       </div>
//     </form>
//   );
// };

// export default AddDoctor;
