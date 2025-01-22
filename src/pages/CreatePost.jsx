import React from "react";
import { addPost } from "../slices/PostSlice";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import PostCard from "./PostCard";
import UseTitle from "../hooks/UseTitle.jsx"
const CreatePost = () => {
  UseTitle("Create Post")
  const dispatch = useDispatch();
  const titleref = useRef();
  const authorRef = useRef();
  const contentRef = useRef();
  const handleAdd = (e) => {
    e.preventDefault(); 
    if (
      !titleref.current.value.trim() ||   // Validate input values, trim ensure that empt spaces is not valid inputs
      !authorRef.current.value.trim() ||
      !contentRef.current.value.trim()
    ) {
      alert("Fill all fields to make a post");
      return;  // return from here without further proceeding
    }
    const postData = {    // Create post data object
      id: new Date().toLocaleTimeString(), // making unique id for all post using current time 
      title: titleref.current.value,
      authorName: authorRef.current.value,
      content: contentRef.current.value,
    };

    dispatch(addPost(postData));
    titleref.current.value = "";
    authorRef.current.value = "";
    contentRef.current.value = "";
  };
  const properties = { // make properties object to pass all values as an object
    titleref,
    authorRef,
    contentRef,
    handleAdd
  }
  return (
    <PostCard properties = {properties}/>
  );
};

export default CreatePost;