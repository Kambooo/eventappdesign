const router = require('express').Router();
const Event = require('../models/Event');
const auth = require('../middleware/auth');

// Get all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find().sort('-createdAt');
    console.log("Fetched events:", events); // <--- add this
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get single event
router.get('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ error: 'Event not found' });
    res.json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create event (protected)
router.post('/', auth, async (req, res) => {
  try {
    const event = new Event({
      ...req.body,
      created_by: req.user.id
    });
    await event.save();
    res.json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update event (protected)
router.put('/:id', auth, async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete event (protected)
router.delete('/:id', auth, async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ message: 'Event deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;