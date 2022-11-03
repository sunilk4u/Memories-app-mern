import axios from "axios";

//posts api url
const url = `${process.env.REACT_APP_API_URI}/posts/`;

//fetch all posts
export const fetchPosts = () => axios.get(url);

//create a post
export const createPost = (newPost) => axios.post(url, newPost);

//update a post
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);

//delete a post
export const deletePost = (id) => axios.delete(`${url}/${id}`);

//like a post
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
