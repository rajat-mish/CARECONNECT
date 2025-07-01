// import jwt from 'jsonwebtoken';

// /**
//  * Middleware: verifies JWT and attaches doctor info to req.user
//  * Expects header:  Authorization: Bearer <token>
//  */
// const authDoctor = (req, res, next) => {
//   try {
//     // 1. Read token from headers
//     const authHeader = req.headers.authorization; // e.g. "Bearer <token>"
//     if (!authHeader || !authHeader.startsWith('Bearer ')) {
//       return res
//         .status(401)
//         .json({ success: false, message: 'Not authorized. Login again!' });
//     }

//     const dtoken = authHeader.split(' ')[1]; // grab the actual token

//     // 2. Verify token
//     const decoded = jwt.verify(dtoken, process.env.JWT_SECRET);

//     // 3. Attach user data to the request object
//     req.docId = { id: decoded.id };

//     next();
//   } catch (error) {
//     console.log('authUser error:', error.message);
//     res.status(401).json({ success: false, message: 'Invalid token' });
//   }
// };

// export default authDoctor;




// middleware/authDoctor.js
import jwt from 'jsonwebtoken';

const authDoctor = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization; // "Bearer xx"

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: 'Not authorized. Login again!' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ attach in a consistent, easy‑to‑use way
    req.doctor = { id: decoded.id };    // or req.user = { ... }
    next();
  } catch (err) {
    console.log('authDoctor error:', err.message);
    res.status(401).json({ success: false, message: 'Invalid token' });
  }
};

export default authDoctor;
