import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import UpdateImageFormModal from "../UpdateImageModal";
import AllComments from "../Comments";
import { fetchImage } from "../../store/imageReducer";
import CreateCommentModal from "../Comments/CreateCommentModal";
import "./ImageDetail.css";

const ImageDetail = function () {
  const sessionUser = useSelector((state) => state.session.user);

  // let postCommentBtn;
  // if (sessionUser) {
  //   postCommentBtn = <a href="/images/new">Write a Comment</a>;
  // } else {
  //   //postCommentBtn leads to login modal form?????????
  // }
  // const history = useHistory();

  const dispatch = useDispatch();
  const imageId = useParams();

  const imageObject = useSelector((state) => state.imageState);
  const image = imageObject.current;
  // console.log("IMAGE COMPONENT:", imageObject.current.Comments);
  // const comments = imageObject.current.Comments; //array of objects ;)
  // console.log("THESE ARE THE COMMENTS", comments);
  // console.log("username?", imageObject);

  useEffect(() => {
    dispatch(fetchImage(imageId));
  }, [dispatch, imageId]);
  // console.log("message and image id:::", imageId);

  // if (sessionUser.id === image.userId) {
  //   return <h1> HEY THERE SUMMONER ! </h1>;
  // }

  return (
    <div className="single-image-detail-container">
      <img src={image?.imageUrl}></img>
      <div className="single-image-right-container">
        <div className="single-image-information-container">
          <h1>Posted by {image?.User?.username}</h1>
          <p>{image?.content}</p>
          <hr className="single-image-hr"></hr>
          {sessionUser?.id === image?.userId ? (
            <UpdateImageFormModal image={image} />
          ) : (
            <></>
          )}
        </div>
        <div className="all-comments-container">
          <h2>Comments</h2>
          {sessionUser?.id ? <CreateCommentModal image={image} /> : <></>}
          <AllComments image={image} />
        </div>
      </div>
    </div>
  );
};

export default ImageDetail;
