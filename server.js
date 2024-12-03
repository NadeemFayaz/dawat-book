const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/database');
const todoRoutes = require('./routes/todoRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Database Connection
connectDB();

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Todo API!');
  });
  
app.use('/api', todoRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
