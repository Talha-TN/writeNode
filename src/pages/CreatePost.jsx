
import React from "react";
const CreatePost = () => {
  return (
    <div className="max-w-lg mx-auto bg-gray-100 p-6 rounded-lg shadow-md mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">Create a New Post</h1>
      <form className="space-y-4">
        {/* Title Input */}
        <input
          type="text"
          placeholder="Enter title"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        
        {/* Author Input */}
        <input
          type="text"
          placeholder="Enter author name"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        
        {/* Content Textarea */}
        <textarea
          rows={6}
          placeholder="Write your post content here..."
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
        
        {/* Submit Button */}
        <button
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
