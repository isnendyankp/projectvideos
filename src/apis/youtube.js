import axios from 'axios';

const KEY = 'AIzaSyAu_tB8pUWkPJXWM0kx_H9aOVCWTM78LhE';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: KEY
	}
});
