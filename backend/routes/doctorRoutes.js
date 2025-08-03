// routes/doctorRoutes.js

const express = require('express');
const router = express.Router();
const { getAllDoctors } = require('../controllers/doctorController');

router.get('/doctors', getAllDoctors);

module.exports = router;
