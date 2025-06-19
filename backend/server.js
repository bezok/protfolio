const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const contactRoutes = require('./routes/contact');
const subscribeRoutes = require('./routes/subscribe');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/subscribe', subscribeRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Portfolio Backend API is running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
