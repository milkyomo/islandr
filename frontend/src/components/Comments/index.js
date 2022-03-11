import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteComment, fetchImage } from "../../store/imageReducer";

const AllComments = function () {
  const sessionUser = useSelector((state) => state.session.user);
  //   const image = useSelector(() => image);
  // console.log(image);
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

  const comments = image?.Comments;

  // const handleDelete = async (e, commentId) => {
  //   e.preventDefault();

  //   await dispatch(deleteComment(commentId));
  // };

  // console.log("COMMENT USER?", comments);
  // console.log("COMMENT IMAGE : ", image);

  //make function if session user, show create button that leads to form modal
  //make function if session user, show delete button
  //make function to handle delete

  // console.log("username", image.Comments[0].User.username);

  return (
    <div>
      <h1>Comments</h1>
      <div className="comments">
        {comments?.reverse().map((comment) => (
          <div key={"" + comment?.id}>
            {/* {console.log("THIS IS COMENTS CONSOLE: ", comment.User)}; */}
            <h1>{comment?.User?.username}</h1>
            <p>{comment?.comment}</p>
            {sessionUser?.id === comment?.userId && (
              <p
                onClick={() => {
                  dispatch(deleteComment(comment?.id));
                }}
                className="deleteCommentBtn"
              >
                <i className="fa-solid fa-trash-can"></i>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllComments;
