import { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import { getPost, updatePost } from "../../services/posts";
import "./PostEdit.css";

const PostEdit = (props) => {
  const [post, setPost] = useState({
    title: "",
    imgURL: "",
    text: "",
  });

  const [isUpdated, setIsUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id);
      setPost(post);
    };
    fetchPost();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { id } = props.match.params;
    const updated = await updatePost(id, post);
    setIsUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={`/posts/${props.match.params.id}`} />;
  }

  return (
    <Layout user={props.user}>
      <div className="post-edit">
        <div className="image-container">
          <img
            className="edit-product-image"
            src={post.imgURL}
            alt={post.title}
          />
          <form onSubmit={handlSubmit}>
            <input
              className="edit-input-image-link"
              placeholder="image URL"
              value={post.imgURL}
              name="imgURL"
              required
              onChange={handleChange}
            />
          </form>
        </div>
        <form className="edit-form" onSubmit={handleSubmit}>
          <input
            className="input-title"
            placeholder="title"
            value={post.title}
            name="title"
            required
            autoFocus
            onChange={handleChange}
          />
          <textarea
            className="textarea-text"
            rows={7}
            cols={14}
            placeholder="text"
            value={post.text}
            name="text"
            required
            autoFocus
            onChange={handleChange}
          />
          <button type="submit" className="save-button">
            save
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default PostEdit;
