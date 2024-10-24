const dbConnection = require('../config/database');

exports.getAllMhs = (req, res) => {
  dbConnection.query('SELECT * FROM mahasiswa', (err, rows) => {
    if (err) {
      res.status(500).send('Sorry, DB!');
      console.error('Kesalahan saat mengakses database:', err);
    } else {
      res.json(rows);
      console.log('Berhasil mengambil data mahasiswa');
    }
  });
};

exports.getMhsById = (req, res) => {
  const id = req.params.id;
  dbConnection.query('SELECT * FROM mahasiswa WHERE id = ?', [id], (err, rows) => {
    if (err) {
      res.status(500).send('Sorry, DB!');
      console.error('Kesalahan saat mengakses database:', err);
    } else {
      res.json(rows[0]);
      console.log('Berhasil mengambil data mahasiswa dengan id:', id);
    }
  });
};

exports.createMhs = (req, res) => {
  const { npm, nama, handphone } = req.body;
  dbConnection.query('INSERT INTO mahasiswa (npm,nama, handphone) VALUES (?, ?, ?)', [npm, nama, handphone], (err, result) => {
    if (err) {
      res.status(500).send('Sorry, DB!');
      console.error('Kesalahan saat mengakses database:', err);
    } else {
      res.status(201).send('Mahasiswa berhasil ditambahkan');
      console.log('Berhasil menambahkan data mahasiswa');
    }
  });
};

exports.updateMhs = (req, res) => {
  const id = req.params.id;
  const { npm, nama, handphone } = req.body;
  dbConnection.query('UPDATE mahasiswa SET npm = ?, nama = ?, handphone = ? WHERE id = ?', [npm, nama, handphone, id], (err, result) => {
    if (err) {
      res.status(500).send('Sorry, DB!');
      console.error('Kesalahan saat mengakses database:', err);
    } else {
      res.send('Mahasiswa berhasil diperbarui');
      console.log('Berhasil memperbarui data mahasiswa dengan id:', id);
    }
  });
};

exports.deleteMhs = (req, res) => {
  const id = req.params.id;
  dbConnection.query('DELETE FROM mahasiswa WHERE id = ?', [id], (err, result) => {
    if (err) {
      res.status(500).send('Sorry, DB!');
      console.error('Kesalahan saat mengakses database:', err);
    } else {
      res.send('Mahasiswa berhasil dihapus');
      console.log('Berhasil menghapus data mahasiswa dengan id:', id);
    }
  });
};