import React from "react";
import { useSelector } from "react-redux";
const HomePage = () => {
  const posts = useSelector((state) => state.PostSlice.posts);
  return (
    <div>
      <h1>welcome to post page</h1>
      {posts &&
        posts.map((post) => (
          <div>
            <h1>{post.title}</h1>
            <h1>{post.authorName}</h1>
            <h1>{post.content}</h1>
          </div>
        ))}
    </div>
  );
};

export default HomePage;
