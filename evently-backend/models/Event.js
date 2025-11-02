const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  category: { type: String, required: true },
  subcategory: String,
  date: { type: Date, required: true },
  time: { type: String, required: true },
  end_date: Date,
  location: { type: String, required: true },
  city: { type: String, required: true },
  address: String,
  price: { type: Number, default: 0 },
  ticket_type: { type: String, enum: ['Free', 'Paid', 'Donation'], default: 'Paid' },
  capacity: Number,
  organizer_name: String,
  organizer_email: String,
  organizer_phone: String,
  image_url: String,
  banner_url: String,
  tags: [String],
  status: { type: String, enum: ['Draft', 'Published', 'Cancelled', 'Completed'], default: 'Published' },
  featured: { type: Boolean, default: false },
  attendees_count: { type: Number, default: 0 },
  created_by: String
}, { timestamps: true });

module.exports = mongoose.model('Event', EventSchema);