const mongoose=require("mongoose")



const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    requried: true,
  },
  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    requried: true,
  },
});

const User = mongoose.model('user', UserSchema);
module.exports = User;