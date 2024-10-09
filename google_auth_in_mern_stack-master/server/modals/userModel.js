const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  googleId: { type: String },
  facebookId: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  displayName: { type: String },
});

module.exports = mongoose.model("User", UserSchema);
