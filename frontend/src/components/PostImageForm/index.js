import React from "react";
import { useDispatch } from "react-redux";

const PostImageForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newImage = {
      imageUrl,
      content,
    };

    dispatch(postImage(newImage));
  };
};
