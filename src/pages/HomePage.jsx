
import React from "react";
import { useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { deletePost } from "../slices/PostSlice";
import { useDispatch } from "react-redux";
const HomePage = () => {
  const dispatch = useDispatch()
  const handleDelete=(id)=>{
    dispatch(deletePost(id))
    
  }
  const posts = useSelector((state) => state.PostSlice.posts);

  return (
    <div className="max-w-4xl mx-auto p-4 ">
      <h1 className="text-3xl font-bold text-center mb-6">Welcome to the Post Page</h1>
      {posts && posts.length > 0 ? (
        posts.map((post, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 mb-4 border border-gray-200 hover:shadow-lg transition relative"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-2">Author: {post.authorName}</p>
            <p className="text-gray-700">{post.content}</p>
            <button title="delete post?" className="text-red-600 text-3xl absolute bottom-2 right-[10px]" onClick={()=>handleDelete(post.id)} ><MdDelete />
            </button>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No posts available.</p>
      )}
    </div>
  );
};

export default HomePage;
