// controllers/doctorController.js

const doctors = require('../data/doctors_dummy_data.json');

const getAllDoctors = (req, res) => {
  const { specialty, location, gender, maxFee, minExp } = req.query;
  let filtered = [...doctors];

  if (specialty) {
    filtered = filtered.filter((doc) =>
      doc.specialty.toLowerCase().includes(specialty.toLowerCase())
    );
  }

  if (location) {
    filtered = filtered.filter((doc) =>
      doc.location.toLowerCase().includes(location.toLowerCase())
    );
  }

  if (gender) {
    filtered = filtered.filter(
      (doc) => doc.gender.toLowerCase() === gender.toLowerCase()
    );
  }

  if (maxFee) {
    filtered = filtered.filter(
      (doc) => doc.consultationFee <= parseInt(maxFee)
    );
  }

  if (minExp) {
    filtered = filtered.filter(
      (doc) => doc.experienceYears >= parseInt(minExp)
    );
  }

  res.json(filtered);
};

module.exports = { getAllDoctors };
