const express = require('express');
const { youtubeAPI, defaultParams } = require('../api/youtubeAPI');

const router = express.Router();

router.post('/', async (req, res) => {
	const { query } = req.body.params;
	try {
		const response = await youtubeAPI.get('/search', {
			params: {
				...defaultParams,
				q: query,
			},
		});
		res.send(response.data);
	} catch (error) {
		console.log('error in youtube router is : ', error);
	}
});

module.exports = router;
