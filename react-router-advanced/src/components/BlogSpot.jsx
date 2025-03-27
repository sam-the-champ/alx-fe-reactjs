import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  return <h2>Viewing Blog Post {id}</h2>;
};

export default BlogPost;
