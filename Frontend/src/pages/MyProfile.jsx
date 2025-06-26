// // import React, { useState } from 'react'
// // import { assets } from '../assets/assets'

// // const MyProfile = () => {
// //   const [userData,setUserData]=useState({
// //     name:"John doe",
// //     image:assets.profile_pic,
// //     email:"johndoe@gmail.com",
// //     phone:"+1 123 456 7890",
// //     address:{
// //       line1:"57th Cross, Richmond",
// //       line2:"Circle, Church Road, London"
// //     },
// //     gender:"Male",
// //     dob:"2000-12-31"
// //   })

// // const [isEdit,setIsEdit]=useState(false)

// //   return (
// //     <div>
// //       <img src={userData.image} alt="" />
// //     </div>
// //   )
// // }

// // export default MyProfile



// import React, { useState } from 'react';
// import { assets } from '../assets/assets';
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';

// const MyProfile = () => {
//   const [isEdit, setIsEdit] = useState(false);
//   const [userData, setUserData] = useState({
//     name: 'John Doe',
//     image: assets.profile_pic,
//     email: 'johndoe@gmail.com',
//     phone: '+1 123 456 7890',
//     address: {
//       line1: '57th Cross, Richmond',
//       line2: 'Circle, Church Road, London',
//     },
//     gender: 'Male',
//     dob: '2000-12-31',
//   });

//   const handleChange = (field, value) => {
//     setUserData({ ...userData, [field]: value });
//   };

//   return (
//     <div className="max-w-5xl mx-auto px-4 py-10">
//       <div className="flex gap-6 items-center mb-8">
//         <img
//           src={userData.image}
//           alt="profile"
//           className="w-28 h-28 rounded-full object-cover border-2 border-primary"
//         />
//         <div>
//           <h2 className="text-2xl font-semibold">{userData.name}</h2>
//         </div>
//       </div>

//       <div className="space-y-6">
//         {/* Contact Info */}
//         <div>
//           <h3 className="text-lg font-semibold text-gray-700 mb-2">
//             Contact Information
//           </h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
//             <div>
//               <label className="text-sm">Email</label>
//               <input
//                 type="email"
//                 disabled={!isEdit}
//                 value={userData.email}
//                 onChange={(e) => handleChange('email', e.target.value)}
//                 className="w-full px-4 py-2 mt-1 border rounded-md disabled:bg-gray-100"
//               />
//             </div>
//             <div>
//               <label className="text-sm">Phone</label>
//               <input
//                 type="text"
//                 disabled={!isEdit}
//                 value={userData.phone}
//                 onChange={(e) => handleChange('phone', e.target.value)}
//                 className="w-full px-4 py-2 mt-1 border rounded-md disabled:bg-gray-100"
//               />
//             </div>
//             <div className="sm:col-span-2">
//               <label className="text-sm">Address</label>
//               <textarea
//                 rows="2"
//                 disabled={!isEdit}
//                 value={`${userData.address.line1}, ${userData.address.line2}`}
//                 className="w-full px-4 py-2 mt-1 border rounded-md disabled:bg-gray-100"
//                 onChange={(e) =>
//                   setUserData({
//                     ...userData,
//                     address: {
//                       ...userData.address,
//                       line1: e.target.value.split(',')[0] || '',
//                       line2: e.target.value.split(',')[1] || '',
//                     },
//                   })
//                 }
//               />
//             </div>
//           </div>
//         </div>

//         {/* Basic Info */}
//         <div>
//           <h3 className="text-lg font-semibold text-gray-700 mb-2">
//             Basic Information
//           </h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
//             {/* <div>
//               <label className="text-sm">Gender</label>
//               <input
//                 type="text"
//                 disabled={!isEdit}
//                 value={userData.gender}
//                 onChange={(e) => handleChange('gender', e.target.value)}
//                 className="w-full px-4 py-2 mt-1 border rounded-md disabled:bg-gray-100"
//               />
//             </div> */}
//             <div>
//   <label className="text-sm">Gender</label>
//   {isEdit ? (
//     <select
//       value={userData.gender}
//       onChange={(e) => handleChange('gender', e.target.value)}
//       className="w-full px-4 py-2 mt-1 border rounded-md"
//     >
//       <option value="Male">Male</option>
//       <option value="Female">Female</option>
//       <option value="Prefer not to say">Prefer not to say</option>
//     </select>
//   ) : (
//     <input
//       type="text"
//       disabled
//       value={userData.gender}
//       className="w-full px-4 py-2 mt-1 border rounded-md bg-gray-100"
//     />
//   )}
// </div>

//             <div>
//               <label className="text-sm">Birthday</label>
//               <input
//                 type="date"
//                 disabled={!isEdit}
//                 value={userData.dob}
//                 onChange={(e) => handleChange('dob', e.target.value)}
//                 className="w-full px-4 py-2 mt-1 border rounded-md disabled:bg-gray-100"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Buttons */}
//         <div className="flex gap-4 mt-6">
//           <button
//             onClick={() => setIsEdit(!isEdit)}
//             className="px-6 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition"
//           >
//             {isEdit ? 'Cancel' : 'Edit'}
//           </button>
//           {isEdit && (
//             <button
//               onClick={() => setIsEdit(false)}
//               className="px-6 py-2 bg-primary text-white rounded hover:opacity-90 transition"
//             >
//               Save Information
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyProfile;



// import React, { useState } from 'react';
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';
// import 'react-phone-input-2/lib/style.css';

// import { assets } from '../assets/assets';

// const MyProfile = () => {
//   const [userData, setUserData] = useState({
//     name: 'John Doe',
//     image: assets.profile_pic,
//     email: 'johndoe@gmail.com',
//     phone: '+919876543210',
//     address: {
//       line1: '57th Cross, Richmond',
//       line2: 'Circle, Church Road, London',
//     },
//     gender: 'Male',
//     dob: '2000-12-31',
//   });

//   const [isEdit, setIsEdit] = useState(false);

//   const handleChange = (field, value) => {
//     if (field === 'address') {
//       setUserData(prev => ({
//         ...prev,
//         address: { ...prev.address, ...value },
//       }));
//     } else {
//       setUserData(prev => ({
//         ...prev,
//         [field]: value,
//       }));
//     }
//   };

//   const handleSave = () => {
//     setIsEdit(false);
//     // Save to DB or send API call here
//     console.log('Saved:', userData);
//   };

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-8">
//       <div className="flex items-center gap-4 mb-6">
//         <img src={userData.image} alt="Profile" className="w-24 h-24 rounded-full object-cover border" />
//         <h1 className="text-2xl font-bold">{userData.name}</h1>
//       </div>

//       <div className="space-y-6">
//         {/* Contact Info */}
//         <div>
//           <h2 className="text-lg font-semibold mb-2">Contact Information</h2>

//           {/* Email */}
//           <div>
//             <label className="block mb-1">Email</label>
//             <input
//               type="email"
//               value={userData.email}
//               onChange={e => handleChange('email', e.target.value)}
//               disabled={!isEdit}
//               className="w-full p-3 border rounded-md bg-gray-100"
//             />
//           </div>

//           {/* Phone */}
//           <div className="mt-4">
//             <label className="block mb-1">Phone</label>
//             {isEdit ? (
//               <PhoneInput
//                 country={'in'}
//                 value={userData.phone}
//                 onChange={phone => handleChange('phone', phone)}
//                 enableSearch={true}
//                 inputProps={{
//                   name: 'phone',
//                   required: true,
//                 }}
//                 inputStyle={{
//                   width: '100%',
//                   borderRadius: '6px',
//                   padding: '12px',
//                 }}
//                 buttonStyle={{
//                   border: 'none',
//                 }}
//               />
//             ) : (
//              <PhoneInput
//   value={userData.phone}
//   disabled
//   country={'in'}
//   inputStyle={{
//     width: '100%',
//     backgroundColor: '#f5f5f5',
//     height: '45px',
//     color: '#333',
//   }}
//   buttonStyle={{
//     border: 'none',
//     backgroundColor: 'transparent',
//   }}
// />

//             )}
//           </div>

//           {/* Address */}
//           <div className="mt-4">
//             <label className="block mb-1">Address</label>
//             <textarea
//               value={`${userData.address.line1}, ${userData.address.line2}`}
//               disabled={!isEdit}
//               onChange={e =>
//                 handleChange('address', {
//                   line1: e.target.value.split(',')[0].trim(),
//                   line2: e.target.value.split(',').slice(1).join(',').trim(),
//                 })
//               }
//               className="w-full p-3 border rounded-md bg-gray-100"
//               rows={2}
//             />
//           </div>
//         </div>

//         {/* Basic Info */}
//         <div>
//           <h2 className="text-lg font-semibold mb-2">Basic Information</h2>

//           {/* Gender */}
//           <div className="mb-4">
//             <label className="block mb-1">Gender</label>
//             {isEdit ? (
//               <select
//                 value={userData.gender}
//                 onChange={e => handleChange('gender', e.target.value)}
//                 className="w-full p-3 border rounded-md bg-white"
//               >
//                 <option>Male</option>
//                 <option>Female</option>
//                 <option>Prefer not to say</option>
//               </select>
//             ) : (
//               <input
//                 type="text"
//                 value={userData.gender}
//                 disabled
//                 className="w-full p-3 border rounded-md bg-gray-100"
//               />
//             )}
//           </div>

//           {/* Birthday */}
//           <div>
//             <label className="block mb-1">Birthday</label>
//             <input
//               type={isEdit ? 'date' : 'text'}
//               value={isEdit ? userData.dob : new Date(userData.dob).toLocaleDateString('en-GB')}
//               onChange={e => handleChange('dob', e.target.value)}
//               disabled={!isEdit}
//               className="w-full p-3 border rounded-md bg-gray-100"
//             />
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex gap-4 mt-6">
//           {isEdit ? (
//             <>
//               <button
//                 onClick={handleSave}
//                 className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//               >
//                 Save
//               </button>
//               <button
//                 onClick={() => setIsEdit(false)}
//                 className="px-4 py-2 border rounded-md"
//               >
//                 Cancel
//               </button>
//             </>
//           ) : (
//             <button
//               onClick={() => setIsEdit(true)}
//               className="px-4 py-2 border rounded-md"
//             >
//               Edit
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyProfile;



import React, { useContext, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


import { AppContext } from '../context/AppContext.jsx';
import { assets } from '../assets/assets.js';
import axios from 'axios';
import { toast } from 'react-toastify';

const MyProfile = () => {
  const {userData,setUserData,backendUrl,loadUserProfileData}=useContext(AppContext)

  const [isEdit, setIsEdit] = useState(false);
  const [image,setImage]=useState(false)
  const navigate = useNavigate();
const { token } = useContext(AppContext); // also pull token

const updateUserProfileData=async(req,res)=>{

        try {
          const formData=new FormData()

          formData.append('name',userData.name)
          formData.append('phone',userData.phone)
          formData.append('address',JSON.stringify(userData.address))
          formData.append('gender',userData.gender)
          formData.append('dob',userData.dob)
          image && formData.append('image',image)

          const {data}=await axios.post(backendUrl+'/api/user/update-profile',formData,{headers:{Authorization: `Bearer ${token}`,}})
          if(data.success){
         toast.success(data.message)
         await loadUserProfileData()
         setIsEdit(false)
         setImage(false)

          }
          else{
                toast.error(data.message)
          }
        } catch (error) {
          console.log(error)
          toast.error(error.message)
        }























}


useEffect(() => {
  if (!token) {
    navigate('/'); // Redirect to homepage if logged out
  }
}, [token]);


  const handleChange = (field, value) => {
    if (field === 'address') {
      setUserData(prev => ({
        ...prev,
        address: { ...prev.address, ...value },
      }));
    } else {
      setUserData(prev => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  const handleSave = () => {
    setIsEdit(false);
    console.log('Saved:', userData);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 bg-white shadow rounded-xl">
      {/* Header with image and name */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          {
            isEdit
            ?<label htmlFor="image">
                  <div className='inline-block relative cursor-pointer'>
                    <img className='w-36 rounded opacity-75' src={image?URL.createObjectURL(image):userData.image} alt="" />
                    <img className='w-10 absolute bottom-12 right-12' src={image?'':assets.upload_icon} alt="" />
                  </div>
                  <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden />
            </label>
            : <img src={userData.image} alt="Profile" className="w-20 h-20 rounded-full object-cover border cursor-pointer" />
            
          }
         
          <div>
            {/* <h1 className="text-2xl font-bold">{userData.name}</h1> */}
            {isEdit ? (
  <input
    type="text"
    value={userData.name}
    onChange={(e) => handleChange('name', e.target.value)}
    className="text-2xl font-bold border p-2 rounded-md"
  />
) : (
  <h1 className="text-2xl font-bold">{userData.name}</h1>
)}

            <p className="text-gray-500">{userData.email}</p>
          </div>
        </div>
        <div>
          {isEdit ? (
            <>
              <button
                onClick={updateUserProfileData}
                className="px-4 py-2 mr-2  bg-primary cursor-pointer text-white rounded-md "
              >
                Save
              </button>
              <button
                onClick={() => setIsEdit(false)}
                className="px-4 py-2 border rounded-md"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEdit(true)}
              className="px-4 py-2 border rounded-md bg-primary text-white cursor-pointer"
            >
              Edit
            </button>
          )}
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Information</h2>

          {/* Email */}
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              type="email"
              value={userData.email}
              onChange={e => handleChange('email', e.target.value)}
              disabled={!isEdit}
              className={`w-full p-3 border rounded-md ${
                isEdit ? 'bg-white' : 'bg-gray-100'
              }`}
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block mb-1">Phone</label>
            <PhoneInput
              country={'in'}
              value={userData.phone}
              onChange={phone => handleChange('phone', phone)}
              enableSearch
              disabled={!isEdit}
              inputStyle={{
                width: '100%',
                height: '45px',
                fontSize: '16px',
                paddingLeft: '50px',
                backgroundColor: isEdit ? '#ffffff' : '#f5f5f5',
                color: '#000',
                border: '1px solid #ccc',
                borderRadius: '6px',
              }}
              buttonStyle={{
                backgroundColor: isEdit ? '#ffffff' : '#f5f5f5',
                border: 'none',
                borderRadius: '6px 0 0 6px',
              }}
              containerStyle={{ width: '100%' }}
              inputProps={{ name: 'phone', required: true }}
            />
          </div>

          {/* Address */}
          <div>
            <label className="block mb-1">Address</label>
            <textarea
              value={`${userData.address?.line1 || ''}, ${userData.address?.line2 || ''}`}

              disabled={!isEdit}
              onChange={e =>
                handleChange('address', {
                  line1: e.target.value.split(',')[0].trim(),
                  line2: e.target.value.split(',').slice(1).join(',').trim(),
                })
              }
              className={`w-full p-3 border rounded-md ${
                isEdit ? 'bg-white' : 'bg-gray-100'
              }`}
              rows={2}
            />
          </div>
        </div>

        {/* Basic Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Basic Information</h2>

          {/* Gender */}
          <div className="mb-4">
            <label className="block mb-1">Gender</label>
            {isEdit ? (
              <select
                value={userData.gender}
                onChange={e => handleChange('gender', e.target.value)}
                className="w-full p-3 border rounded-md bg-white"
              >
                <option>Male</option>
                <option>Female</option>
                <option>Prefer not to say</option>
              </select>
            ) : (
              <input
                type="text"
                value={userData.gender}
                disabled
                className="w-full p-3 border rounded-md bg-gray-100"
              />
            )}
          </div>

          {/* DOB */}
          <div>
            <label className="block mb-1">Birthday</label>
            <input
              type={isEdit ? 'date' : 'text'}
              value={isEdit ? userData.dob : new Date(userData.dob).toLocaleDateString('en-GB')}
              onChange={e => handleChange('dob', e.target.value)}
              disabled={!isEdit}
              className={`w-full p-3 border rounded-md ${
                isEdit ? 'bg-white' : 'bg-gray-100'
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
