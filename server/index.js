const express = require('express');
const youtubeRouter = require('./routes/youtube.routes');

const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});

app.use(express.static('./client/public')); // serve our index.html file, located in our ./client/public folder

app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded()); // Parse URL-encoded bodies

// set up our routers
app.use('/youtube', youtubeRouter);
