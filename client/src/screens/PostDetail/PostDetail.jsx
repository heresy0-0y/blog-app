import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./PostDetail.css";
import Layout from "../../components/shared/Layout/Layout";
import { getPost, deletePost } from "../../services/posts";

const PostDetail = (props) => {
  const [post, setPost] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id);
      setPost(post);
      setIsLoaded(true);
    };
    fetchPost();
  }, [id]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div className="post-detail">
        <img className="post-detail-image" src={post.imgURL} alt={post.title} />
        <div className="detail">
          <div className="title">{post.title}</div>
          <div className="text">{post.text}</div>
          <div className="button-container">
            <button className="edit-button">
              <Link className="edit-link" to={`/posts/${post._id}/edit`}>
                edit
              </Link>
            </button>
            <button
              className="delete-button"
              onClick={() => deletePost(post._id)}
            >
              delete
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostDetail