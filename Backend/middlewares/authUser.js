// import jwt from 'jsonwebtoken'

// //user authentication middleware

// const authUser=async(req,res,next)=>{
//   try {
//     const {token}=req.headers
//     if(!token){
//         res.json({success:false,message:"Not Authorized Login Again!"})
//     }
//     const token_decode=jwt.verify(token,process.env.JWT_SECRET)
//   req.body.userId=token_decode.id
//     next()
//   } catch (error) {
//              console.log(error)
//       res.json({success:false,message:error.message})
//   }
// }

// export default authUser


import jwt from 'jsonwebtoken';

/**
 * Middleware: verifies JWT and attaches user info to req.user
 * Expects header:  Authorization: Bearer <token>
 */
const authUser = (req, res, next) => {
  try {
    // 1. Read token from headers
    const authHeader = req.headers.authorization; // e.g. "Bearer <token>"
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res
        .status(401)
        .json({ success: false, message: 'Not authorized. Login again!' });
    }

    const token = authHeader.split(' ')[1]; // grab the actual token

    // 2. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 3. Attach user data to the request object
    req.user = { id: decoded.id };

    next();
  } catch (error) {
    console.log('authUser error:', error.message);
    res.status(401).json({ success: false, message: 'Invalid token' });
  }
};

export default authUser;
