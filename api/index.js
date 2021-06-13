'use strict';

// Load the package
const line = require('@line/bot-sdk');
const express = require('express');
const axios = require('axios');
const ngrok = require('ngrok');
require('dotenv').config();

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

// Start the server (Production Environment)
// app.listen(PORT, () => {
//   console.log('http://localhost:3000');
// });

// Connect the server with Ngrok (Development Environment)
ngrok.connect(PORT).then((url) => {
  app.listen(PORT, () => {
    console.log('http://localhost:3000');
    console.log(url);
  });
});
