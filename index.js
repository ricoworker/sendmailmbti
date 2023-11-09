const express = require('express');
const app = express();
const sendEmailsSequentially = require('./mailsendmbti');
const fs = require('fs');
const mongoose = require('mongoose');

// Load data from a JSON file
const data = JSON.parse(fs.readFileSync('./tes.json', 'utf8'));
const port = 5000;
console.log(data.length);

async function startServer() {
  try {
    await mongoose.connect(
      'mongodb+srv://ricokurnia19:12345@filterproductcity.qjrycf0.mongodb.net/sendjawaban?retryWrites=true&w=majority'
    );
    console.log('Connected to MongoDB');

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
      sendEmailsSequentially(data); // Jalankan sendEmailsSequentially setelah server berhasil terhubung
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

startServer();
