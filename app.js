const express = require('express');
const mongoose = require('mongoose'); // ربط المونجوس
const brandRoute = require('./routes/brandroute');

const app = express();

// Middleware
app.use(express.json());

// ربط الداتابيز
mongoose.connect('mongodb://localhost:27017/my-mongo-project')
  .then(() => console.log('DB Connected Successfully'))
  .catch((err) => console.log(`DB Error: ${err}`));

// Routes
app.use('/api/v1/brands', brandRoute);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});