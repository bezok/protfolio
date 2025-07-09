const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
<<<<<<< Updated upstream

dotenv.config();

const contactRoutes = require('./routes/contact');
const subscribeRoutes = require('./routes/subscribe');

const app = express();

// Middleware
app.use(cors());
=======
const notesRoutes = require('./routes/notes');
//const connectDB = require('./config/db');

dotenv.config();
//connectDB();

const app = express();
//app.use(cors());
>>>>>>> Stashed changes
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/subscribe', subscribeRoutes);

<<<<<<< Updated upstream
// Default route
app.get('/', (req, res) => {
  res.send('Portfolio Backend API is running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
=======
//const PORT = process.env.PORT || 5000;
//app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
>>>>>>> Stashed changes
