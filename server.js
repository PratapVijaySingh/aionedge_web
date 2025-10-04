const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Route for the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for mission-vision page
app.get('/mission-vision', (req, res) => {
    res.sendFile(path.join(__dirname, 'mission-vision.html'));
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`AION Edge website is running on port ${PORT}`);
    console.log(`Visit: http://localhost:${PORT}`);
});
