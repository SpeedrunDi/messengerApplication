require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const exitHook = require('async-exit-hook');
const users = require('./app/users');
const events = require('./app/events');
const config = require('./config');

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

app.use('/users', users);
app.use('/events', events);

const run = async () => {
  await mongoose.connect(config.mongo.db, config.mongo.options);

  app.listen(port, () => {
    console.log(`Server started on ${port} port!`);
  });

  exitHook(() => {
    mongoose.disconnect();
    console.log('Mongoose disconnect');
  });
};

run().catch(e => console.error(e));