import { createUser, validateUser } from './service.js';
import jwt from 'jsonwebtoken';

// Register user
export const registerUser = async (req, res) => {
  const userData = req.body;
  await createUser(userData);
  res.status(201).json({ success: true, message: 'User registered successfully!' });
};

// Login user
export const loginUser = async (req, res) => {
  const logindata = req.body;
  const validUser = await validateUser(logindata);

  if (validUser) {
    const token = jwt.sign(
      {
        id: validUser._id,
        fullname: validUser.full_name,
        email: validUser.email,
        type: 'user',
      },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Return JSON instead of plain text
    return res
      .cookie('token', token, { maxAge: 3600000, httpOnly: true }) // 1 hour
      .status(200)
      .json({ success: true, message: 'Login success' });
  }

  // Return JSON for failed login
  return res.status(401).json({ success: false, message: 'Invalid email or password' });
};
