const Post = require("../models/user");
const db = require("../db/connection");

db.on("error", console.error.bind(console, "MongoBleepBloop erger: "));

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Post.findById(id);
    if (post) {
      return res.json(post);
    }
    res.status(404).json({ message: "can't find tht post!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
