// import React, { useContext, useEffect, useState } from 'react'
// import { AppContext } from '../context/AppContext'
// import { useNavigate } from 'react-router-dom'

// const RelatedDoctors = ({speciality,docId}) => {
//   const {doctors}=useContext(AppContext)
//   const [relDoc,setRelDoc]=useState([])
//   const navigate=useNavigate()

//   useEffect(()=>{
//  if(doctors.length>0 && speciality){
//   const doctorsData=doctors.filter((doc)=>doc.speciality===speciality && doc._id!=docId)
//   setRelDoc(doctorsData)
//  }



//   },[doctors,speciality,docId])

//   return (
//     <section className="w-full px-6 md:px-20 py-16 bg-white text-gray-800" id="speciality">
//       {/* Header Section */}
//       <div className="flex flex-col items-center gap-4 text-center">
//         <h2 className="text-3xl font-semibold">Top Doctors to Book</h2>
//         <p className="text-sm text-gray-600 sm:w-1/2">
//           Simply browse through our extensive list of trusted doctors.
//         </p>
//       </div>

//       {/* Doctor Cards Grid */}
//       <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
//         {relDoc.map((item, index) => (
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
//         ))}
//       </div>

//       {/* Show More Button */}
//       {!showAll && doctors.length > 10 && (
//         <div className="flex justify-center mt-10">
//           <button
//             onClick={() =>{navigate('/doctors');scrollTo(0,0)}}
//             className="px-6 py-2 bg-[#EDF0FF] hover:bg-[#dce3ff] text-[#5D73FF] rounded-full font-medium shadow-md transition-all"
//           >
//             More
//           </button>
//         </div>
//       )}
//     </section>
//   )
// }

// export default RelatedDoctors









import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({ speciality, docId }) => {
  const { doctors } = useContext(AppContext)
  const [relDoc, setRelDoc] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      )
      setRelDoc(doctorsData)
    }
  }, [doctors, speciality, docId])

  return (
    <section className="w-full px-6 md:px-20 py-16 bg-white text-gray-800" id="speciality">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-semibold">Related Doctors</h2>
        <p className="text-sm text-gray-600 sm:w-1/2">
          Simply browse through our extensive list of trusted doctors.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {relDoc.map((item, index) => (
          <div
            key={index}
            onClick={() =>{ navigate(`/appointment/${item._id}`);scrollTo(0,0)}}
            className="cursor-pointer bg-white border border-gray-200 rounded-xl overflow-hidden hover:-translate-y-[10px] transition-all duration-500"
          >
            <div className="bg-blue-50 w-full aspect-[3/4] flex items-end justify-center overflow-hidden rounded-t-xl">
              <img src={item.image} alt={item.name} className="h-full object-cover" />
            </div>

            <div className="p-4">
              <div className="flex items-center text-xs text-green-600 mb-1">
                <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                Available
              </div>
              <p className="font-medium text-base">{item.name}</p>
              <p className="text-sm text-gray-500">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RelatedDoctors
