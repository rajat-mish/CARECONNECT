// import React from 'react'
// import { assets } from '../assets/assets'

// const About = () => {
//   return (
//     <div>
//       <div>
//         <p>ABOUT <span>US</span></p>
//       </div>

//      <div>
//       <img src={assets.about_image} alt="" />
    

//      <div>
//       <p></p>
//       <p></p>
//       <b></b>
//       <p></p>
//      </div>

//  </div>
//     </div>
//   )
// }

// export default About



import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className="w-full px-6 md:px-20 py-16 bg-white text-gray-800">
      {/* --- About Us Heading --- */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">
          About <span className="text-blue-600">Us</span>
        </h2>
        <p className="mt-4 text-sm text-gray-600 max-w-xl mx-auto">
          Your trusted partner in streamlining healthcare appointments and enhancing your wellness journey.
        </p>
      </div>

      {/* --- Image + Paragraph Section --- */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-14">
        <div className="w-full lg:w-auto max-w-md mx-auto lg:mx-0">
          <img
            src={assets.about_image}
            alt="About CareConnect"
            className="rounded-xl shadow-md w-full object-cover"
          />
        </div>

        <div className="flex-1 text-base leading-relaxed text-gray-700 space-y-4">
          <p>
            Welcome to <strong>CareConnect</strong> – your reliable digital partner for managing healthcare needs efficiently and effortlessly.
            We understand how busy life gets, so we've built a platform that helps you book doctor appointments and manage your health records with ease.
          </p>
          <p>
            At CareConnect, our commitment lies in blending cutting-edge technology with compassionate care.
            By connecting patients to a trusted network of doctors, we aim to simplify the healthcare experience for everyone.
          </p>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">Our Vision</h3>
            <p>
              To bridge the gap between patients and healthcare professionals by creating a seamless, accessible, and user-friendly appointment booking system.
              We empower individuals to take control of their health—anytime, anywhere.
            </p>
          </div>
        </div>
      </div>

      {/* --- Why Choose Us Section --- */}
    <div className="mt-20">
  <h3 className="text-center text-2xl font-semibold text-gray-900 mb-6">Why Choose Us</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
    <div className="border p-6 rounded-lg shadow-sm hover:bg-primary hover:text-white transition duration-300 cursor-pointer">
      <h4 className="text-lg font-semibold mb-2">Efficiency</h4>
      <p className="text-sm">
        Streamlined appointment scheduling that fits into your busy lifestyle.
      </p>
    </div>
    <div className="border p-6 rounded-lg shadow-sm hover:bg-primary hover:text-white transition duration-300 cursor-pointer">
      <h4 className="text-lg font-semibold mb-2">Convenience</h4>
      <p className="text-sm">
        Access a network of trusted healthcare professionals in your area.
      </p>
    </div>
    <div className="border p-6 rounded-lg shadow-sm hover:bg-primary hover:text-white transition duration-300 cursor-pointer">
      <h4 className="text-lg font-semibold mb-2">Personalization</h4>
      <p className="text-sm">
        Tailored recommendations and reminders to help you stay on top of your health.
      </p>
    </div>
  </div>
</div>

    </div>
  );
};

export default About;
