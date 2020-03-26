import axios from 'axios';

const defaultHeaders = {
	'Content-Type': 'application/json',
};

const API = {
	post: async (path, params) => {
		const response = await axios.post(path, { params }, defaultHeaders);
		console.log('response in front end API is : ', response);
		return response;
	},
};

export default API;
