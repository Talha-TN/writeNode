import { createSlice } from "@reduxjs/toolkit";

const PostSlice = createSlice({
  name: "PostSlice",
  initialState: {
    posts: [
      // {
      //   title: "post one",
      //   authorName: "Talha Nawaz",
      //   content: "hello my post Number One",
      // },
    ],
  },
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    deletePost: (state, action) => {
      state.posts.pop(action.payload);
    },
  },
});
export const { addPost, deletePost } = PostSlice.actions;
export default PostSlice.reducer;
