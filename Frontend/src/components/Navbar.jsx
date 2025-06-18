import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(true); // simulate logged-in user

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      {/* Logo */}
      <img className='w-44 cursor-pointer' src={assets.careconnect} alt="logo" />

      {/* Navigation Links */}
      <ul className='hidden md:flex items-center gap-6 font-medium'>
        {[
          { to: '/', label: 'HOME' },
          { to: '/doctors', label: 'ALL DOCTORS' },
          { to: '/about', label: 'ABOUT' },
          { to: '/contact', label: 'CONTACT' },
        ].map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center text-gray-700`
            }
          >
            <li className='py-1'>{item.label}</li>
            {/* underline only when active */}
            <div className={`h-0.5 w-3/5 mt-1 ${item.to === window.location.pathname ? 'bg-primary' : 'bg-transparent'}`}></div>
          </NavLink>
        ))}
      </ul>

      {/* Right Side */}
      <div className='flex items-center gap-4'>
        {token ? (
          <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-8 rounded-full' src={assets.profile_pic} alt="profile" />
            <img className='w-2.5' src={assets.dropdown_icon} alt="dropdown" />
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
              <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;







// import React from 'react'
// import { assets } from '../assets/assets'
// import { NavLink } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
//       <img className='w-44 cursor-pointer' src={assets.careconnect} alt="" />
//       <ul className='hidden md:flex items-start gap-5 font-medium'>
//         <NavLink to='/'>
//           <li className='py-1'>HOME</li>
//           {/* <hr /> */}
//           <hr className="h-[2px] bg-primary w-3/5 mx-auto" />

          
//         </NavLink>

//           <NavLink to='/doctors'>
//           <li className='py-1'>ALL DOCTORS</li>
//          <hr />
//         </NavLink>

//           <NavLink to='/about'>
//           <li className='py-1'>ABOUT</li>
//      <hr />
//         </NavLink>

//           <NavLink to='/contact'>
//           <li className='py-1'>CONTACT</li>
//          <hr />
//         </NavLink>
//       </ul>
//       <div>
//         <button>Create Account</button>
//       </div>
//     </div>
//   )
// }

// export default Navbar
