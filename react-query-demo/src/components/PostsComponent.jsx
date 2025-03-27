import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return response.data;
};

const PostsComponent = () => {
  const { data: posts, isLoading, isError, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 5000, // Cache data for 5 seconds before refetching
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error loading posts!</p>;

  return (
    <div>
      <button onClick={refetch}>Refetch Posts</button>
      <ul>
        {posts?.slice(0, 10).map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
