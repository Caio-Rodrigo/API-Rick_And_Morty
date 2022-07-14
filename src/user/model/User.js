const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const userSchema = new mongoose.Schema({
  user: { type: String, required: true, index: { unique: true } },
  username: { type: String, required: true },
  email: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true, select: false },
  avatar: { type: String, required: false },
});                                                                                   

// userSchema.pre('save', function (next) {
//   var user = this;
//   // ira fazer um hash da senha se ela tiver sido modificada ou criada
//   if (!user.isModified('passowed')) return next();
//   // ira grerar o salt
//   bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
//     if (err) return next(err);

//     // senha com hash usando salt
//     bcrypt.hash(user.password, salt, (err, hash) => {
//       if (err) return next(err);
//       user.password = hash;
//       next();
//     });
//   });
// });

// userSchema.methods.comparePassword = (canditatePassword, cb) => {
//   bcrypt.compare(canditatePassword, this.password, (err, isMatch) => {
//     if (err) return next(err);
//     cb(null, isMatch);
//   });
// };

const Login = mongoose.model('Login', userSchema, 'users');

module.exports = Login;
