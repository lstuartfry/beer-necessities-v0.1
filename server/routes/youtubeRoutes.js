const { youtubeAPI, defaultParams } = require('../api/youtubeAPI');

module.exports = app => {
	app.get('/youtube', async (req, res) => {
		console.log('req in node is : ', req);
		try {
			const response = await youtubeAPI.get('/search', {
				params: {
					...defaultParams,
					q: 'surfing',
				},
			});
			console.log('response in node is : ', response);
			res.send(response.data);
		} catch (error) {
			console.log('error in youtubeAPI is : ', error);
		}
	});
};
