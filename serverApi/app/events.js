const express = require('express');
const Event = require('../models/Event');
const auth = require("../middleware/auth");

const router = express.Router();

router.get('/', auth, async (req, res) => {
  try {
    const events = Event.find();

    res.send(events);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post('/', auth, async (req, res) => {
  const {name, datetime, duration} = req.body;

  const newDatetime = new Date(datetime);

  console.log(newDatetime);

  const eventData = {
    name,
    duration,
    datetime: newDatetime,
    user: req.user._id
  };

  try {
    const event = new Event(eventData);

    await event.save();

    res.send(event);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;