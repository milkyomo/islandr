import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchImage } from "../../store/imageReducer";
import "./ImageDetail.css";

const ImageDetail = function () {
  const dispatch = useDispatch();
  const imageId = useParams();

  const imageObject = useSelector((state) => state.imageState.entries);
  //   const image = Object.values(imageObject);

  console.log("IMAGEEEEE", imageObject);
  //   const { content, imageUrl, userId } = image;
  //   console.log(content);

  useEffect(() => {
    dispatch(fetchImage(imageId));
  }, [dispatch]);

  return (
    <>
      <h1>Hi</h1>
    </>
  );
};

export default ImageDetail;
