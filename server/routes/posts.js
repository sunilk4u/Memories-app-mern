const express = require("express");
const {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} = require("../controllers/posts");
const auth = require("../middlewares/auth");
const router = express.Router();

// get all posts
router.get("/", getPosts);

// create a post
router.post("/", auth, createPost);

//update post
router.patch("/:id", auth, updatePost);

//delete post
router.delete("/:id", auth, deletePost);

//like a post
router.patch("/:id/likepost", auth, likePost);

module.exports = router;
