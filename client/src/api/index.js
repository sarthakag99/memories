import axios from 'axios';

// const url = 'https://localhost:5000/posts';
// const url = 'https://memories-server-mern.herokuapp.com/posts';

// export const fetchPosts = () => axios.get(url);
// export const createPost = (newPost) => axios.post(url, newPost);
// export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
// export const deletePost = (id) => axios.delete(`${url}/${id}`);
// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);

// export const signIn = (formData) => axios.post(`${url}/user/signin`, formData);
// export const signUp = (formData) => axios.post(`${url}/user/signup`, formData);



// const API = axios.create({ baseURL: 'http://localhost:5000' });   //FOR LOCAL SERVER
const API = axios.create({ baseURL: 'https://memories-server-mern.herokuapp.com' });  //FOR HEROKU APP SERVER

//for middleware
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});
//-------//


export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);

export const fetchPost = (id) => API.get(`/posts/${id}`);
