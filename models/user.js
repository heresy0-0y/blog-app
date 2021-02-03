const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    posts: [{ type: Schema.Types.ObjectId, ref: "posts" }],
  },
  { timestamps: true }
);
const Post = new Schema(
  {
    title: { type: String, required: true },
    imgURL: { type: String, required: true },
    text: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: "users" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("posts", Post);
module.exports = mongoose.model("users", User);
