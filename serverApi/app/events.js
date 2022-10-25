const express = require('express');
const Event = require('../models/Event');
const auth = require("../middleware/auth");
const User = require("../models/User");

const router = express.Router();

router.get('/', auth, async (req, res) => {
  const sort = {};
  try {
    sort.datetime = 1;
    const usersId = [];
    const users = await User.find({friends: req.user._id}, {_id: 1});

    if (users && users.length !== 0) {
      users.forEach(user => {
        usersId.push(user._id);
      });
    }

    const events = await Event
      .find({$or: [{user: req.user._id}, {user: {$in: usersId}}]})
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

router.delete('/:id', auth, async (req, res) => {
  if (!req.params.id) {
    return res.status(400).send({message: 'ID not valid'});
  }

  try {
    const event = await Event.findOneAndDelete({_id: req.params.id});

    if (!event) {
      return res.status(404).send({message: "Track not found!"});
    }

    res.send(event);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;