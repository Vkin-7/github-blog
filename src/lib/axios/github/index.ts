import axios from 'axios';

export const api_github = axios.create({
	baseURL: import.meta.env.VITE_GITHUB_API_URL
});