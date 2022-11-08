import axios from "axios";

//Axios instance
const API = axios.create({
  baseURL: `${process.env.REACT_APP_API_URI}`,
});

//fetch all posts
export const fetchPosts = () => API.get("/posts");

//create a post
export const createPost = (newPost) => API.post("/posts", newPost);

//update a post
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);

//delete a post
export const deletePost = (id) => API.delete(`/posts/${id}`);

//like a post
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

//sign in
export const signin = (formData) => API.post("/users/signin", formData);

//sign up
export const signup = (formData) => API.post("/users/signup", formData);
