// server.js

// Import required modules
const express = require('express');
const path = require('path');
const hostname = '127.0.0.1';


// Create an Express application
const app = express();
app.use(express.static(__dirname));

// Define a route to serve the HTML file
app.get('/', (req, res) => {
	// Send the HTML file as the response
	res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
});

