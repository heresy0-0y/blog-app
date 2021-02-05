import { useState } from "react";
import "./PostCreate.css";
import Layout from "../../components/shared/Layout/Layout";
import { Redirect } from "react-router-dom";
import { createPost } from "../../services/posts";

const PostCreate = (props) => {
  const [post, setPost] = useState({
    title: "",
    imgURL: "",
    text: "",
  });
  const [isCreated, setIsCreated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const created = await createPost(post);
    setIsCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={"/posts"} />;
  }
  return (
    <Layout user={props.user}>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          className="input-title"
          placeholder="title"
          value={post.title}
          name="title"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-imgURL"
          placeholder="image URL"
          value={post.imgURL}
          name="imgURL"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-text"
          placeholder="text"
          value={post.text}
          name="text"
          required
          autoFocus
          onChange={handleChange}
        />
      </form>
    </Layout>
  );
};

export default PostCreate;
