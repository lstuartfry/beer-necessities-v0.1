const axios = require('axios');
const keys = require('../config/keys');

// unfortunately axios (as of v0.19.1) has a bug where default params
// are overridden by instance params.
// https://github.com/axios/axios/pull/2656
// as a workaround, we will store the default params in a separate object,
// and use that object whenever we call our custom axios instance

const defaultParams = {
	key: keys.YOUTUBE_API_KEY,
	part: 'snippet',
	maxResults: 20,
	type: 'video',
};

const youtubeAPI = axios.create({
	baseURL: keys.YOUTUBE_BASE_URL,
});

module.exports = {
	youtubeAPI,
	defaultParams,
};
