// import React from 'react'
// import { assets } from '../assets/assets'

// const Header = () => {
//   return (
//     <div>
//       {/* .............{left side}............. */}
//       <div>
//         <p>Book Appointment <br />With Trusted Doctors</p>
//         <div>
//             <img src={assets.group_profiles} alt="" />
//             <p>Simply browse through our extensive list of trusted doctors, <br />
// schedule your appointment hassle-free.</p>
//         </div>
//         <a href="">Book Appointment <img src={assets.arrow_icon} alt="" /></a>
//       </div>


//      {/* ..................{right side}.............. */}
//         <div>
//             <img src={assets.Doctors} alt="" />
//         </div>

//     </div>
//   )
// }

// export default Header



import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <section className="w-full bg-[#5D73FF] text-white px-6 md:px-20 py-14 rounded-b-3xl relative overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">

        {/* Left Side */}
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Book Appointment <br /> With <span className="text-white/90">Trusted Doctors</span>
          </h1>

          <div className="flex items-start gap-4 mb-6">
            <img src={assets.group_profiles} alt="Profiles" className="w-24  h-12 rounded-full shadow-lg" />
            <p className="text-sm md:text-base text-white/90">
              Simply browse through our extensive list of trusted doctors, 
              schedule your appointment hassle-free.
            </p>
          </div>

          {/* <a
            href="#"
            className="inline-flex items-center bg-white text-[#5D73FF] font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition-all duration-300"
          >
            Book Appointment
            <img src={assets.arrow_icon} alt="Arrow" className="w-4 h-4 ml-2" />
          </a> */}

          <a
  href="#speciality"
  className="group inline-flex items-center bg-white text-[#5D73FF] font-semibold px-6 py-3 rounded-full shadow hover:bg-[#EDF0FF] hover:scale-105 transition-all duration-300"
>
  Book Appointment
  <img
    src={assets.arrow_icon}
    alt="Arrow"
    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
  />
</a>

        </div>

        {/* Right Side */}
        <div className="w-full max-w-md md:max-w-lg lg:max-w-xl">
          <img
            src={assets.Doctors}
            alt="Doctors"
            className="w-full object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Header;
