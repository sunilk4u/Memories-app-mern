const express = require("express");
const {
  getPosts,
  getPostsBySearch,
  createPost,
  updatePost,
  deletePost,
  likePost,
  getPost
} = require("../controllers/posts");
const auth = require("../middlewares/auth");
const router = express.Router();

//search post 
router.get("/search", getPostsBySearch);

// get all posts
router.get("/", getPosts);

// get single post
router.get("/:id", getPost);

// create a post
router.post("/", auth, createPost);

//update post
router.patch("/:id", auth, updatePost);

//delete post
router.delete("/:id", auth, deletePost);

//like a post
router.patch("/:id/likepost", auth, likePost);

module.exports = router;
