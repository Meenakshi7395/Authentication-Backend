import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  mobile : {type: String , required:true},
  dob:{type:Date, timestamps:true}

},
{
  timestamps: true // Automatically
}
);

const User = mongoose.model('User', userSchema);

export default User;