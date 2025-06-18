// import React from 'react'
// import { assets } from '../assets/assets'

// const Footer = () => {
//   return (
//     <div>
//         <div>

//      {/* {.......left section............} */}
//      <div>
//          <img src={assets.careconnect} alt="" />
//          <p>CareConnect is a modern solution designed to simplify the process of booking doctor appointments. Built with a user-first approach, it helps patients connect with healthcare professionals seamlessly, offering a smooth and reliable platform for scheduling, managing, and tracking medical consultations.</p>
//      </div>


//           {/* {.......middle section............} */}
//      <div>
        
//      </div>



//           {/* {.......right section............} */}
//      <div>
        
//      </div>



//         </div>
      
//     </div>
//   )
// }

// export default Footer


import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className=" text-gray-700 px-6 py-10 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Left Section */}
        <div>
          <img src={assets.careconnect} alt="CareConnect Logo" className="w-40 mb-4" />
          <p className="text-sm leading-relaxed">
            CareConnect is a modern solution for booking doctor appointments. 
            Built with a user-first approach, it connects patients with trusted 
            healthcare professionals for seamless scheduling and consultations.
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-md font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-primary transition">Home</a></li>
            <li><a href="/about" className="hover:text-primary transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-primary transition">Contact Us</a></li>
            <li><a href="/privacy-policy" className="hover:text-primary transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-md font-semibold mb-4">Get In Touch</h3>
          <ul className="text-sm space-y-2">
            <li>📞 +91-9696939189</li>
            <li>✉️ careconnectapp@gmail.com</li>
            <li>🏥 YourHealth, Our Priority.</li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <hr className="my-6 border-gray-300" />
      <p className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()} CareConnect — All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer

