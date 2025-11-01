const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  event_id: { type: String, required: true },
  event_title: String,
  event_date: String,
  event_time: String,
  event_location: String,
  user_email: { type: String, required: true },
  user_name: String,
  num_tickets: { type: Number, default: 1 },
  total_price: { type: Number, required: true },
  booking_status: { type: String, enum: ['Confirmed', 'Cancelled', 'Pending'], default: 'Confirmed' }
}, { timestamps: true });

module.exports = mongoose.model('Booking', BookingSchema);