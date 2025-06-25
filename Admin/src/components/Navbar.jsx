// import React, { useContext } from 'react'
// import { AdminContext } from '../context/AdminContext'
// import { assets } from '../assets/assets'

// const Navbar = () => {
//     const {aToken}=useContext(AdminContext)

//   return (
//     <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
//          <div className='flex items-center gap-2 text-xs'>
//             <img className='w-36 sm:w-40 cursor-pointer' src={assets.admin_logo_careconnect} alt="" />
//              <div className="flex flex-col leading-tight">
//     <p className="text-xs text-gray-500 -mt-1">Dashboard Panel</p>
//   </div>
//             <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600'>{aToken?'Admin':'Doctor'}</p>
//          </div>
//          <button>Logout</button>
//     </div>
//   )
// }

// export default Navbar




import React, { useContext } from 'react';
import { AdminContext } from '../context/AdminContext';
import { assets } from '../assets/assets';
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  const { aToken,setAToken } = useContext(AdminContext);
  const navigate=useNavigate();

  const logout=()=>{
    navigate('/')
    aToken && setAToken('')
    aToken && localStorage.removeItem('aToken')
  }

  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white">
      {/* Left section */}
      <div className="flex items-center gap-4">
        {/* Logo + subtitle */}
        <div className="flex flex-col leading-tight">
          <img
            className="w-36 sm:w-40 cursor-pointer"
            src={assets.admin_logo_careconnect}
            alt=""
          />
          <p className="text-xs text-gray-700 -mt-0.5 ml-1">Dashboard Panel</p>
        </div>

        {/* Admin/Doctor badge */}
        <p className="border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600 text-xs">
          {aToken ? 'Admin' : 'Doctor'}
        </p>
      </div>

      {/* Logout button */}
      <button onClick={logout} className="bg-primary text-white text-sm px-10 py-2 rounded-full cursor-pointer">Logout</button>
    </div>
  );
};

export default Navbar;
