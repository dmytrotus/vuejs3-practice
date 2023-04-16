import axios from 'axios';

class GithubModel{
	async getUser(data) {
    	const response = await axios.get('https://api.github.com/users/'+data);
        return response;
    }
}

export const Github = new GithubModel();