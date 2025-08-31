import User from '../../models/user.js';

export const createUser = async (userData) => {
  await User.create(userData);
};

export const validateUser = async (logindata) => {
  try {
    const user = await User.findOne({
      email: logindata.email,
    });
    if(!user) {
        throw new Error('User not found');
    }

    const isPasswordMatched = await user.isValidPassword(logindata.password);
    if(!isPasswordMatched) {
        throw new Error('Password did not match');
    }
    return user;
  } catch (error) {
    console.log('Error in validating user', error);

  }
};
