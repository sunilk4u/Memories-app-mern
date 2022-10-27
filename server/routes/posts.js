const express = require("express");
const { getPosts, createPost } = require("../controllers/posts");
const router = express.Router();

// get all posts
router.get("/", getPosts);

// create a post
router.post("/", createPost)

module.exports = router;
