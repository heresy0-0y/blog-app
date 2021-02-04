import { Link } from "react-router-dom";
import "./Post.css";

const Post = (props) => {
  return (
    <>
      <Link className="post" to={`/posts/${props._id}`}>
        <img className="post-image" src={props.imgURL} alt={props.title} />
        <div className="post-title">{props.title}</div>
        <div className="post-text">{props.text}</div>
      </Link>
    </>
  );
};

export default Post;
