// models/doctorModel.js

const fs = require('fs');
const path = require('path');

const getDoctorsData = () => {
  const filePath = path.join(__dirname, '../data/doctors_dummy_data.json');
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
};

module.exports = { getDoctorsData };
