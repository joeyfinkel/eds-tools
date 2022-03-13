// @ts-check
// require('dotenv').config();

const express = require('express');
const puppeteer = require('puppeteer');

const {
  getAllClients,
} = require('./backend/bots/itemRefresher/clientFetcher/clients');
const {
  credentials,
} = require('./backend/bots/itemRefresher/Helpers/Login/credentials');

const app = express();
const port = 5000;

app.get('/clients', async (req, res) => {
  // const browser = await puppeteer.launch({ headless: false, slowMo: 100 });
  // const page = await browser.newPage();
  // const clients = await getAllClients(page);
  // await getAllClients(page);
  res.json(process.env.PDX_EMAIL);
  console.log(`App is listening on port ${port}`);
  // res.send(credentials);
  // browser.close();
});

app.listen(port);
