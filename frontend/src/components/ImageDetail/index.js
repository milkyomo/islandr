import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchImage } from "../../store/imageReducer";
import "./ImageDetail.css";

const ImageDetail = function () {
  const dispatch = useDispatch();
  const imageId = useParams();

  const imageObject = useSelector((state) => state.imageState.entries);
  const image = imageObject[imageId.id];

  useEffect(() => {
    dispatch(fetchImage(imageId));
  }, [dispatch]);

  return (
    <>
      <img src={image?.imageUrl}></img>
      <h1>Posted by {image?.User.username}</h1>
      <p>"{image?.content}"</p>
    </>
  );
};

export default ImageDetail;
