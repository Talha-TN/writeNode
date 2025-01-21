// import React from "react";
// import { useSelector } from "react-redux";
// const HomePage = () => {
//   const posts = useSelector((state) => state.PostSlice.posts);
//   return (
//     <div>
//       <h1>welcome to post page</h1>
//       {posts &&
//         posts.map((post,index) => (
//           <div key={index}>
//             <h1>{post.title}</h1>
//             <h1>{post.authorName}</h1>
//             <h1>{post.content}</h1>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default HomePage;
import React from "react";
import { useSelector } from "react-redux";

const HomePage = () => {
  const posts = useSelector((state) => state.PostSlice.posts);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Welcome to the Post Page</h1>
      {posts && posts.length > 0 ? (
        posts.map((post, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 mb-4 border border-gray-200 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-2">Author: {post.authorName}</p>
            <p className="text-gray-700">{post.content}</p>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No posts available.</p>
      )}
    </div>
  );
};

export default HomePage;
