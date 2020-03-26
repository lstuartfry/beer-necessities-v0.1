// initialize our express application
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});

// serve our index.html file, located in our ../client/public folder
app.use(express.static('../client/public'));

// expose our express application to our API routes
require('./routes/youtubeRoutes')(app);
