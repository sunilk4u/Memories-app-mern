import * as api from "../api";
import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE_POST,
  FETCH_SEARCH,
  START_LOADING,
  END_LOADING,
  FETCH_POST,
} from "../constants/actionTypes";

//Action creator for fetching single post
export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPost(id);
    dispatch({ type: FETCH_POST, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

//Action creator for fetching posts
export const getPosts = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPosts(page);
    dispatch({ type: FETCH_ALL, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

//Action creator for get posts by search
export const getPostsBySearch = (query) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {
      data: { data },
    } = await api.fetchPostsBySearch(query);
    dispatch({ type: FETCH_SEARCH, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

//Action creator for creating a post
export const createPost = (post, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
    dispatch({ type: END_LOADING });
    navigate(`/posts/${data._id}`);
  } catch (error) {
    console.log(error);
  }
};

//Action creator for update post
export const updatePost = (id, post, navigate) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: UPDATE, payload: data });
    navigate(`/posts/${data._id}`);
  } catch (error) {
    console.log(error);
  }
};

//Action creator for delete post
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

//Action creator for Like Post
export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: LIKE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};
