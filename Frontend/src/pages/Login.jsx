// import React, { useState } from 'react'

// const Login = () => {
//   const [state,setState]=useState('Sign Up')
//   const [email,setEmail]=useState('')
//   const [password,setPassword]=useState('')
//   const [name,setName]=useState('')

// const onSubmitHandler=async(event)=>{
//   event.preventDefault()
// }


//   return (
//     <form >

//     </form>
//   )
// }

// export default Login




import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext.jsx';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
  const {backendUrl,token,setToken}=useContext(AppContext)
  const [mode, setMode] = useState('signup');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
      
   try {
    if(mode==='signup'){
      const {data}=await axios.post(backendUrl+'/api/user/register',{name,password,email})
      if(data.success){
        localStorage.setItem('token',data.token)
        setToken(data.token)
      }
      else{
        toast.error(data.message)
      }

    }
    else{
          const {data}=await axios.post(backendUrl+'/api/user/login',{password,email})
      if(data.success){
        localStorage.setItem('token',data.token)
        setToken(data.token)
      }
      else{
        toast.error(data.message)
      }
    }
   } catch (error) {
    toast.error(error.message)
   }


     
  };

  useEffect(()=>{
       if(token){
        navigate('/')
       }
  },[token])

  return (
    <div className="min-h-screen flex items-start justify-center pt-20 bg-white px-4">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md border">
        <h2 className="text-2xl font-semibold mb-2">
          {mode === 'signup' ? 'Create Account' : 'Welcome Back'}
        </h2>
        <p className="text-gray-500 mb-6">
          {mode === 'signup'
            ? 'Please sign up to book appointment'
            : 'Please login to continue'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'signup' && (
            <div>
              <label className="text-sm text-gray-600">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          )}

          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded hover:opacity-90 transition cursor-pointer"
          >
            {mode === 'signup' ? 'Create account' : 'Login'}
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-600">
          {mode === 'signup'
            ? 'Already have an account?'
            : "Don't have an account?"}{' '}
          <button
            type="button"
            onClick={() => setMode(mode === 'signup' ? 'login' : 'signup')}
            className="text-primary underline ml-1 cursor-pointer"
          >
            {mode === 'signup' ? 'Login here' : 'Sign up'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
