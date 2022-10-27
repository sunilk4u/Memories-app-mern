const mongoose = require("mongoose");

//post model schema
const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

//create post model
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
