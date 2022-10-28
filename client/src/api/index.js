import axios from "axios"

//posts api url
const url = `${process.env.REACT_APP_API_URI}/posts/`

//fetch all posts
export const fetchPosts = () => axios.get(url);