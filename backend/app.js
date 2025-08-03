const express = require('express');
const cors = require('cors');
const doctorRoutes = require('./routes/doctorRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', doctorRoutes); // e.g., http://localhost:5000/api/doctors

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
