const express = require("express");
const {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} = require("../controllers/posts");
const router = express.Router();

// get all posts
router.get("/", getPosts);

// create a post
router.post("/", createPost);

//update post
router.patch("/:id", updatePost);

//delete post
router.delete("/:id", deletePost);

//like a post
router.patch("/:id/likepost", likePost);

module.exports = router;
