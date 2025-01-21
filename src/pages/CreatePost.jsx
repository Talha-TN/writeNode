import React from "react";
import { addPost } from "../slices/PostSlice";
import { useRef } from "react";
import { useDispatch } from "react-redux";
const CreatePost = () => {
  const dispatch = useDispatch()
  const idRef =useRef("")
  const titleref = useRef("")
  const authorRef = useRef("")
  const contentRef = useRef("")
  const handleAdd =(e)=>{
    e.preventDefault()
      const postData = {
        id:idRef.current.value,
        title: titleref.current.value,
        authorName: authorRef.current.value,
        content: contentRef.current.value,
      }
      console.log(postData)
      dispatch(addPost(postData))
      titleref.current.value=""
      authorRef.current.value=""
      contentRef.current.value=""
      idRef.current.value=""
    
  }
  return (
    <div className="max-w-lg mx-auto bg-gray-100 p-6 rounded-lg shadow-md mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">Create a New Post</h1>
      <form className="space-y-4">
        {/* Title Input */}
        <input
         ref={idRef}
          type="text"
          placeholder="Enter post id"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
         ref={titleref}
          type="text"
          placeholder="Enter title"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        
        {/* Author Input */}
        <input
          ref={authorRef}
          type="text"
          placeholder="Enter author name"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        
        {/* Content Textarea */}
        <textarea
          ref={contentRef}
          rows={6}
          placeholder="Write your post content here..."
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
        
        {/* Submit Button */}
        <button onClick={handleAdd}
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-md font-medium hover:bg-blue-600 transition duration-200"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
