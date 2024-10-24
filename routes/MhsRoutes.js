const express = require('express');
const router = express.Router();
const MhsController = require('../controllers/MhsController');

// Middleware untuk mengizinkan CORS agar dapat diakses dari Flutter
router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

router.get('/mahasiswa', MhsController.getAllMhs);
router.get('/mahasiswa/:id', MhsController.getMhsById);
router.post('/mahasiswa', MhsController.createMhs);
router.put('/mahasiswa/:id', MhsController.updateMhs);
router.delete('/mahasiswa/:id', MhsController.deleteMhs);

module.exports = router;
