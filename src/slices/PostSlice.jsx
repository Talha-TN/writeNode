import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const PostSlice = createSlice({
  name: "PostSlice",
  initialState: {
    posts: [],
  },
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
      toast.success("Post Created");
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
      toast.error("Post Deleted");
    },
  },
});
export const { addPost, deletePost } = PostSlice.actions;
export default PostSlice.reducer;
