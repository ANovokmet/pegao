import axios from 'axios';
const API_URL = '';

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

export default class UserService {

	constructor(){}
  
  getCurrentUser() {
		const url = `${API_URL}/api/users/me`;
		return axios.get(url).then(response => response);
	}
  
  
  getTopUser() {
		const url = `${API_URL}/api/users/top`;
		return axios.get(url).then(response => response);
	}

  getUser(username) {
		const url = `${API_URL}/api/users/${username}`;
		return axios.get(url).then(response => response);
	}

  getUserList(username) {
		const url = `${API_URL}/api/users/${username}/lists`;
		return axios.get(url).then(response => response);
	}

  getFriendship(username) {
		const url = `${API_URL}/api/friendships/${username}`;
		return axios.get(url).then(response => response);
	}

  createFriendship(username,post){
		//console.log('post:'+JSON.stringify(post));
    const url = `${API_URL}/api/friendships/${username}`;
		return axios.post(url,post);
	}

  destroyFriendship(username){
    const url = `${API_URL}/api/friendships/${username}/destroy`;
		return axios.delete(url);
	}

  getFollowing(username) {
    //console.log("getFollowing");
		const url = `${API_URL}/api/following/${username}`;
		return axios.get(url).then(response => response);
	}

}
