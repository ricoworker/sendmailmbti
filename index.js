const express = require('express');
const app = express();
const sendEmailsSequentially = require('./mailsendmbti');
const fs = require('fs');

// Load data from a JSON file
const data = JSON.parse(fs.readFileSync('./datauat.json', 'utf8'));

sendEmailsSequentially(data);
