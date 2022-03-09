import React, { useEffect } from "react";
import { useParams, Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import UpdateImageFormModal from "../UpdateImageModal";
import { fetchImage } from "../../store/imageReducer";
import "./ImageDetail.css";

const ImageDetail = function () {
  const sessionUser = useSelector((state) => state.session.user);

  // let postCommentBtn;
  // if (sessionUser) {
  //   postCommentBtn = <a href="/images/new">Write a Comment</a>;
  // } else {
  //   //postCommentBtn leads to login modal form?????????
  // }

  const history = useHistory();

  const dispatch = useDispatch();
  const imageId = useParams();

  const imageObject = useSelector((state) => state.imageState);
  const image = imageObject.current;

  useEffect(() => {
    dispatch(fetchImage(imageId));
  }, [dispatch, imageId]);
  // console.log("message and image id:::", imageId);

  // if (sessionUser.id === image.userId) {
  //   return <h1> HEY THERE SUMMONER ! </h1>;
  // }

  return (
    <>
      {/* >
      {image ? ( */}
      <div className="single-image-detail-container">
        <img src={image?.imageUrl}></img>
        <h1>Posted by {image?.User?.username}</h1>
        <p>"{image?.content}"</p>
        <div>
          {sessionUser.id === image?.userId ? (
            <UpdateImageFormModal image={image} />
          ) : (
            <></>
          )}
        </div>
      </div>
      {/* ) : (
         // <Redirect to="/where-is-this-place" />
         history.push("/where-is-this-place")
       )}
     </> */}
    </>
  );
};

export default ImageDetail;
