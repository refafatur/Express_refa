const express = require('express');
const cors = require('cors');
const MhsRoutes = require('./routes/MhsRoutes');
const app = express();

app.use(express.json());

app.use(cors());

// Menggunakan rute
app.use('/data', MhsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Aplikasi sedang berjalan di http://localhost:${PORT}`);
});

module.exports = app;