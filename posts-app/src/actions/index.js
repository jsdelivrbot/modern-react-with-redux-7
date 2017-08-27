import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog/herokuapp.com/api';
const API_KEY  = '2ff573c5-4268-4bd4-90ca-dd2c85fcfa23';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts?key=${API_KEY}`);
  
  return {
    type: FETCH_POSTS,
    payload: request
  };
}