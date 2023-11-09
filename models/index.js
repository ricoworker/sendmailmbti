const mongoose = require('mongoose');

const statusEmailSchema = mongoose.Schema(
  {
    nama: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    tanggal: {
      type: Date,
    },
  },
  {
    collection: 'sendjawaban',
  }
);

const StatusEmail = mongoose.model('sendjawaban', statusEmailSchema);

module.exports = StatusEmail;
