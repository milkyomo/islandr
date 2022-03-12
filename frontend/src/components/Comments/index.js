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

  const comments = image?.Comments; //?.sort((a, b) => b.id - a.id);
  console.log("Comments: ", comments);

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

  function formatDate(string) {
    var options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(string).toLocaleDateString([], options);
  }

  return (
    <div>
      <div className="comments">
        {comments &&
          Object.values(comments)
            .sort((a, b) => b.id - a.id)
            .map((comment) => (
              <div key={"" + comment?.id} className="individual-comment">
                <h3 className="individual-comment-user">
                  {comment?.User?.username}
                </h3>
                <p>{formatDate(comment?.createdAt)}</p>
                <p className="individual-comment-comment">{comment?.comment}</p>
                {sessionUser?.id === comment?.userId && (
                  <div className="deleteCommentBtn">
                    <p
                      onClick={async () => {
                        await dispatch(deleteComment(comment?.id));
                      }}
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </p>
                  </div>
                )}
              </div>
            ))}
      </div>
    </div>
  );
};

export default AllComments;
