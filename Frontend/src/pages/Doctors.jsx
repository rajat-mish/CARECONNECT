// import React, { useContext, useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
// import { AppContext } from '../context/AppContext';
// import { doctors } from '../assets/assets';

// const Doctors = () => {
//   const {speciality}=useParams();
//   const [filterDoc,setFilterDoc]=useState([]);
//   const navigate=useNavigate()
//   const {Doctors}=useContext(AppContext);

// const applyFilter=()=>{
//   if(speciality){
//     setFilterDoc(doctors.filter(doc=>doc.speciality===speciality))
//   }
//   else{
//     setFilterDoc(doctors);
//   }
// }

// useEffect(()=>{
// applyFilter()
// },[doctors,speciality])



//   return (
//     <div>
//       <p>Browse through the doctors specialist.</p>
//       <div>
//         <div>
//           <p>General physician</p>
//           <p>Gynecologist</p>
//           <p>Dermatologist</p>
//           <p>Pediatricians</p>
//           <p>Neurologist</p>
//           <p>Gastroenterologist</p>
//         </div>
//         <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
//           {
//             filterDoc.map((item, index) => (
//           <div
//             key={index}
//             onClick={() => navigate(`/appointment/${item._id}`)}
//             className="cursor-pointer bg-white border border-gray-200 rounded-xl overflow-hidden  hover:-translate-y-[10px] transition-all duration-500"
//           >
//            <div className="bg-blue-50 w-full aspect-[3/4] flex items-end justify-center overflow-hidden rounded-t-xl">
//   <img
//     src={item.image}
//     alt={item.name}
//     className="h-full object-cover"
//   />
// </div>

//             <div className="p-4">
//               <div className="flex items-center text-xs text-green-600 mb-1">
//                 <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
//                 Available
//               </div>
//               <p className="font-medium text-base">{item.name}</p>
//               <p className="text-sm text-gray-500">{item.speciality}</p>
//             </div>
//           </div>
//         ))
//           }
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Doctors



import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { doctors } from '../assets/assets';

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();
  const { Doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  const specialities = [
    'General physician',
    'Gynecologist',
    'Dermatologist',
    'Pediatricians',
    'Neurologist',
    'Gastroenterologist',
  ];

  return (
    <div className="px-4 md:px-16 py-6">
      <p className="text-sm text-gray-500 mb-6">Browse through the doctors specialist.</p>
      <div className="flex flex-col md:flex-row gap-10">
        
        {/* Sidebar Filters */}
        <div className="w-full md:w-1/5 space-y-3">
          {specialities.map((item, i) => (
            <button
              key={i}
              onClick={() => navigate(`/doctors/${item}`)}
              className={`block w-full text-left px-4 py-2 rounded border hover:bg-blue-50 text-sm ${
                speciality === item ? 'bg-blue-100 border-blue-500 text-blue-600 font-medium' : 'text-gray-700 border-gray-300'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Doctors Grid */}
        {/* <div className="w-full md:w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filterDoc.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="cursor-pointer bg-white border border-gray-200 rounded-xl overflow-hidden hover:-translate-y-1 transition-all duration-300 shadow-sm"
            >
              <div className="bg-blue-50 w-full aspect-[3/4] flex items-end justify-center overflow-hidden rounded-t-xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center text-xs text-green-600 mb-1">
                  <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                  Available
                </div>
                <p className="font-semibold text-base">{item.name}</p>
                <p className="text-sm text-gray-500">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div> */}
        <div className="w-full md:w-4/5">
  {filterDoc.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filterDoc.map((item, index) => (
        <div
          key={index}
          onClick={() => navigate(`/appointment/${item._id}`)}
          className="cursor-pointer bg-white border border-gray-200 rounded-xl overflow-hidden hover:-translate-y-1 transition-all duration-300 shadow-sm"
        >
          <div className="bg-blue-50 w-full aspect-[3/4] flex items-end justify-center overflow-hidden rounded-t-xl">
            <img
              src={item.image}
              alt={item.name}
              className="h-full object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex items-center text-xs text-green-600 mb-1">
              <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
              Available
            </div>
            <p className="font-semibold text-base">{item.name}</p>
            <p className="text-sm text-gray-500">{item.speciality}</p>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="text-center text-gray-500 mt-10">
      <p className="text-lg font-medium">No doctors available in this speciality at the moment.</p>
      <p className="text-sm mt-2">Please check back later or explore other specialities.</p>
    </div>
  )}
</div>

      </div>
    </div>
  );
};

export default Doctors;
