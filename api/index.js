'use strict';

// Load the package
const line = require('@line/bot-sdk');
const express = require('express');
require('dotenv').config();

// Load the module
const ButtonOrErrorMessage = require('./Common/Send/ButtonOrErrorMessage');
const FlexMessage = require('./Common/Send/FlexMessage');

// Read the ports from the process.env file
const PORT = process.env.PORT || 3000;

// Load the access token and channel secret from the .env file
const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
};

// Instantiate
const app = express();
const client = new line.Client(config);

// Do routing
// Testing Routing
app.get('/', (req, res) => {
  res.send('Hello World');
});

// API Routing
app.post('/api/line/message', line.middleware(config), async (req, res) => {
  const event = req.body.events[0];
  const eventType = event.message.type;

  if (eventType === 'text') {
    await ButtonOrErrorMessage.SendMessage(client, event);
  }

  if (eventType === 'location') {
    await FlexMessage.SendMessage(client, event);
  }
});

// Start the server (Production Environment)
app.listen(PORT, () => {
  console.log('http://localhost:3000');
});
