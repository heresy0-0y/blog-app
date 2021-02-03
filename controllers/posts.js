const Post = require("../models/user");
const db = require("../db/connection");

db.on("error", console.error.bind(console, "MongoBleepBloop erger: "));

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
  }
};
