// // import React, { useContext } from 'react'
// // import { AppContext } from '../context/AppContext'

// // const MyAppointment = () => {
// //   const {doctors}=useContext(AppContext)
// //   return (
// //     <div>
// //       <p>My Appointments</p>
// //       <div>
// //            {
// //             doctors.slice(0,2).map((item,index)=>{
// //               <div key={index}>
// //                     <div>
// //                       <img src={item.image} alt="" />
// //                     </div>
// //                     <div>
// //                       <p></p>
// //                       <p></p>
// //                       <p></p>
// //                       <p></p>
// //                       <p></p>
// //                       <p></p>
// //                     </div>
// //               </div>
// //             })
// //            }
// //       </div>
// //     </div>
// //   )
// // }

// // export default MyAppointment


// import React, { useContext } from 'react';
// import { AppContext } from '../context/AppContext';

// const MyAppointment = () => {
//   const { doctors } = useContext(AppContext);

//   return (
//     <div className="p-6">
//       <p className="text-xl font-semibold mb-4">My Appointments</p>
//       <div className="space-y-6">
//         {doctors.slice(0, 3).map((item) => (
//           <div
//             key={item._id}
//             className="flex justify-between items-start border rounded-md p-4 shadow-sm"
//           >
//             {/* Left: Doctor Info */}
//             <div className="flex">
//               <img
//                 src={item.image}
//                 alt="doctor"
//                 className="w-20 h-20 rounded-md object-cover mr-6"
//               />
//               <div>
//                 <p className="font-semibold text-lg">{item.name}</p>
//                 <p className="text-sm text-gray-600">{item.speciality}</p>
//                 <p className="mt-2 text-sm font-semibold">Address:</p>
//                 <p className="text-sm text-gray-700">{item.address.line1}</p>
//                 <p className="text-sm text-gray-700">{item.address.line2}</p>
//                 <p className="mt-2 text-sm font-semibold">
//                   Date & Time: <span className="text-gray-700">25, July, 2024 | 8:30 PM</span>
//                 </p>
//               </div>
//             </div>

//             {/* Right: Buttons */}
//             <div className="flex flex-col gap-2 items-end">
//               <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-primary hover:text-white transition-all duration-500">
//                 Pay here
//               </button>
//               <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-red-600 hover:text-white transition-all duration-500">
//                 Cancel appointment
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyAppointment;




import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const MyAppointment = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="p-4 sm:p-6">
      <p className="text-xl font-semibold mb-4">My Appointments</p>
      <div className="space-y-6">
        {doctors.slice(0, 3).map((item) => (
          <div
            key={item._id}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-start border rounded-md p-4 shadow-sm"
          >
            {/* Doctor Info */}
            <div className="flex mb-4 sm:mb-0 sm:mr-6">
              <img
                src={item.image}
                alt="doctor"
                className="w-20 h-20 rounded-md object-cover mr-4"
              />
              <div>
                <p className="font-semibold text-lg">{item.name}</p>
                <p className="text-sm text-gray-600">{item.speciality}</p>
                <p className="mt-2 text-sm font-semibold">Address:</p>
                <p className="text-sm text-gray-700">{item.address.line1}</p>
                <p className="text-sm text-gray-700">{item.address.line2}</p>
                <p className="mt-2 text-sm font-semibold">
                  Date & Time: <span className="text-gray-700">25, July, 2024 | 8:30 PM</span>
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-2 sm:items-end">
              <button className="text-sm text-stone-600 text-center min-w-[160px] py-2 border rounded-md hover:bg-primary hover:text-white cursor-pointer transition-all duration-300">
                Pay here
              </button>
              <button className="text-sm text-stone-600 text-center min-w-[160px] py-2 border rounded-md hover:bg-red-600 hover:text-white cursor-pointer transition-all duration-300">
                Cancel appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointment;
