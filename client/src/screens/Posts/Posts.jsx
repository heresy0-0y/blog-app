import { useState, useEffect } from "react";
import { getPosts } from "../../services/posts";
import Layout from "../../components/shared/Layout/Layout";
import Post from "../../components/Post/Post";

const Posts = (props) => {
  const [allPosts, setAllPosts] = useState([]);
  // const [queriedPosts, setQueriedPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setAllPosts(posts);
      // setQueriedPosts(posts);
    };
    fetchPosts();
  }, []);

  // const handleSearch = (e) => {
  //   const newQueriedPosts = allPosts.filter((post) =>
  //     post.title.toLowerCase().includes(e.target.value.toLowerCase())
  //   );
  //   setQueriedPosts(newQueriedPosts);
  // };

  // const handleSubmit = (e) => e.preventDefault();
  //
  //
  //   with search or sort, change to queriedPosts
  const postsJSX = allPosts.map(function (post, index) {
    return (
      <Post
        _id={post._id}
        title={post.title}
        imgURL={post.imgURL}
        text={post.text}
        key={index}
      />
    );
  });

  return (
    <Layout>
      <div className="posts">{postsJSX}</div>
    </Layout>
  );
};

export default Posts;
