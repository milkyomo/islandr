import React, { useEffect } from "react";
import { useParams, Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchImage } from "../../store/imageReducer";
import "./ImageDetail.css";

const ImageDetail = function () {
  // const sessionUser = useSelector((state) => state.session.user);

  // let postCommentBtn;
  // if (sessionUser) {
  //   postCommentBtn = <a href="/images/new">Write a Comment</a>;
  // } else {
  //   //login modal form?????????
  // }

  const history = useHistory();

  const dispatch = useDispatch();
  const imageId = useParams();

  const imageObject = useSelector((state) => state.imageState.entries);
  const image = imageObject[imageId.id];

  useEffect(() => {
    dispatch(fetchImage(imageId));
  }, [dispatch]);

  return (
    // <>
    //   {image ? (
    <div>
      <img src={image?.imageUrl}></img>
      <h1>Posted by {image?.User?.username}</h1>
      <p>"{image?.content}"</p>
    </div>
    //   ) : (
    //     // <Redirect to="/where-is-this-place" />
    //     history.push("/where-is-this-place")
    //   )}
    // </>
  );
};

export default ImageDetail;
