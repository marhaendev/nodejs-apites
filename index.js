const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const userRoutes = require('./routes/users');

// Middleware logging menggunakan morgan
app.use(morgan('dev'));

// Middleware untuk parsing JSON
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Middleware untuk menangani endpoint yang tidak ditemukan
app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

// Middleware untuk menangani error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Mulai server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
