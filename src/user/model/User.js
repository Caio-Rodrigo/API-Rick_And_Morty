const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
  user: { type: String, required: true, index: { unique: true } },
  username: { type: String, required: true },
  email: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true, select: false },
  avatar: { type: String, required: false },
});                                                                                   

userSchema.pre("save", async function(next){
  this.password = await bcrypt.hash(this.password, 10)
  next()
})

const Login = mongoose.model('Login', userSchema, 'users');

module.exports = Login;
