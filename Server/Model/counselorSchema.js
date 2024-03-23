const mongoose = require('mongoose');

const counselorSchema = new mongoose.Schema({
  img: String,
  name: String,
  education: String,
  address: String,
  email: String,
  phone: String,
  credentials : String,
  counsellingType : String,
  Description : String,
});

const Counselor = mongoose.model('Counselor', counselorSchema);

module.exports = Counselor;
