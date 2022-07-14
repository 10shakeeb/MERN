import axios from 'axios';

const url = 'http://localhost:5002/posts';

export const fetchPosts = () => axios.get(url);