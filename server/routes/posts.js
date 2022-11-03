const express = require("express");
const {
  getPosts,
  createPost,
  updatePost,
  deletePost,
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

module.exports = router;
