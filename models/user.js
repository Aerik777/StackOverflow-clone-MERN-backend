import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema({
    email: {type: String,required: true},
    full_name: {type: String,required: true},
    password: {type: String,required: true},
});

userSchema.pre('save',async function (next) {
    try{
   if(!this.isModified('password')) return next();

   const salt = await bcrypt.genSalt(10);
   this.password = await bcrypt.hash(this.password, salt);

   next();
    } catch(error) {
        console.log('Error hasing password',error);
        next(error);
    }
});

userSchema.methods.isValidPassword = async function (password) {
    try {
        return await bcrypt.compare(password, this.password);
    } catch (error) {
        console.log('Error in validating password', error);
        throw new Error('Password did not match');
        
    }
}

export default mongoose.model('User',userSchema);