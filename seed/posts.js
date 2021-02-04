const db = require("../db/connection");
const Post = require("../models/post");
// const User = require("../models/user");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  // const user1 = new User({
  //   username: "herasey",
  //   email: "heresy.y.ysereh@gmail.com",
  //   posts: [],
  // });

  // await user1.save();

  const posts = [
    {
      title: "who is blog even",
      imgURL:
        "https://lh3.googleusercontent.com/proxy/qqX0gp457z9wFvtRKDG2bLH1A20EWHKdLPp1nmWFSVn8oV5Mj2Ilsz8n1h-slkuWdef9gI4bnYFjc9hRsu-o50x6NHt5qjmfDPyFEbKsiwDriEKO1M0kn-JR_dGeIA",
      text: "this is baby blog, they eat only fried frog",
      // userId: user1,
    },
    {
      title: "oh, hey girl",
      imgURL:
        "https://images.unsplash.com/photo-1595967444215-4901e8436909?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YnV0dGVyZmx5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      text: "ooooohhh",
      // userId: user1,
    },
  ];
  await Post.insertMany(posts);
  console.log("posts we did the posts!");

  // user1.posts = await Post.find({ userId: user1 });
};

const run = async () => {
  await main();
  db.close();
};

run();
