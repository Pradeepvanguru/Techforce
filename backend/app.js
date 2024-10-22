const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const contentRoutes = require('./routes/contentRoutes');
const uiRoutes = require('./routes/uiRoutes');

// Initialize environment variables
dotenv.config();

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
// app.use(bodyParser.json()); // Parse JSON data in request bodies

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit process with failure
    }
};
connectDB();

// Routes
app.use('/api/content', contentRoutes);   // Routes for content management
app.use('/api/ui-layout', uiRoutes);      // Routes for UI layout management

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'An internal server error occurred' });
});

// Example API route for fetching data
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
  });

// Example API route to create new data
app.post('/api/data', (req, res) => {
    const { someData } = req.body;
    // Process and save data to the database
    res.json({ success: true, data: someData });
  })

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
