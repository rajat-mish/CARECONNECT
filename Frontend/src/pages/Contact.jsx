// import React from 'react'
// import { assets } from '../assets/assets'

// const Contact = () => {
//   return (
//     <div>
//       <div>
//         <p>Contact Us</p>
//       </div>
//       <div>
//         <img src={assets.contact_image} alt="" />
//       </div>
//     </div>
//   )
// }

// export default Contact







import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-center text-3xl font-bold mb-2">
        Contact <span className="text-primary">Us</span>
      </h2>
      <p className="text-center text-gray-600 mb-12">
        We'd love to hear from you! Reach out to us anytime.
      </p>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Image - smaller width */}
        <div className="w-full max-w-sm mx-auto">
          <img
            src={assets.contact_image}
            alt="Contact"
            className="w-full object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Info Section */}
        <div>
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Our Office</h4>
            <p className="text-gray-600">54709 Willms Station<br />Suite 350, Washington, USA</p>
            <p className="text-gray-600 mt-2">Tel: (415) 555-0132</p>
            <p className="text-gray-600">Email: <a href="mailto:rajatmishra6767@gmail.com" className="underline text-primary">rajatmishra6767@gmail.com</a></p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Careers at CareConnect</h4>
            <p className="text-gray-600 mb-4">
              Learn more about our teams and job openings.
            </p>
            <button className="border border-primary text-primary hover:bg-primary hover:text-white px-4 py-2 rounded transition duration-300">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
