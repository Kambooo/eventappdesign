const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  full_name: { type: String, required: true },
  phone: String,
  city: String,
  avatar_url: String,
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  favorite_categories: [String],
  favorite_events: [String]
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);