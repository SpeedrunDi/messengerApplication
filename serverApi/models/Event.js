const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EventSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  datetime: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  }
});

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;

