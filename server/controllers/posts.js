const { mongoose } = require("mongoose");
const Post = require("../models/post");

//get all posts from the database
const getPosts = async (req, res) => {
  try {
    const post = await Post.find({});
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//create a post
const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new Post(post);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

//update post
const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id");

  const updatedPost = await Post.findByIdAndUpdate(_id, post, { new: true });
  res.json(updatedPost);
};

module.exports = {
  getPosts,
  createPost,
  updatePost,
};
