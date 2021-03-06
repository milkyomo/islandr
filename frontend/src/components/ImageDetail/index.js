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

  useEffect(() => {
    dispatch(fetchImage(imageId));
  }, [dispatch, imageId]);

  // if (sessionUser.id === image.userId) {
  //   return <h1> HEY THERE SUMMONER ! </h1>;
  // }

  function formatDate(string) {
    var options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(string).toLocaleDateString([], options);
  }
  const dateString = image?.createdAt;
  const date = formatDate(dateString);

  return (
    <div className="single-image-detail-container">
      <img src={image?.imageUrl}></img>
      <div className="single-image-right-container">
        <div className="single-image-information-container">
          <h1>by {image?.User?.username}</h1>
          <p className="date">Posted on {date}</p>
          <p className="caption">{image?.content}</p>
          {sessionUser?.id === image?.userId ? (
            <UpdateImageFormModal image={image} />
          ) : (
            <></>
          )}
          <hr className="single-image-hr"></hr>
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
