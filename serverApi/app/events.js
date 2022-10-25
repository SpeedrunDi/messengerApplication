const express = require('express');
const Event = require('../models/Event');
const auth = require("../middleware/auth");

const router = express.Router();

router.get('/', auth, async (req, res) => {
  const query = {};
  const sort = {};
  try {
    query.user = req.user._id;
    sort.datetime = 1;

    const events = await Event
      .find(query)
      .sort(sort)
      .populate('user', 'displayName');

    res.send(events);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post('/', auth, async (req, res) => {
  const {name, datetime, duration} = req.body;

  const newDatetime = new Date(datetime);

  if (newDatetime < new Date()) {
    return res.status(400).send({dateMessage: 'You can\'t create an event on a past date!'});
  }

  const eventData = {
    name,
    duration,
    datetime: newDatetime.toISOString(),
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