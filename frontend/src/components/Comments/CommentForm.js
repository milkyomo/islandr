import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postComment } from "../../store/imageReducer";
import img from "../images/favicon-32x32.png";

const CommentForm = ({ onClose, image }) => {
  const sessionUser = useSelector((state) => state.session.user);
  //   console.log("THIS IS IMAGE FROM FORM", image);

  const dispatch = useDispatch();

  const [comment, setComment] = useState("");

  const updatedComment = (e) => setComment(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let createdComment = {
      userId: sessionUser.id,
      imageId: image.id,
      comment,
    };

    if (createdComment) {
      dispatch(postComment(createdComment));
      onClose();
    }
  };

  return (
    <div className="createimg-container">
      <div className="loginmodal-container-box">
        <h1>Add a comment</h1>
        <img src={img} />
      </div>
      <br></br>
      <form onSubmit={handleSubmit}>
        <label>
          Comment
          <input
            type="text"
            required={true}
            value={comment}
            onChange={updatedComment}
          />
        </label>
        <button
          type="submit"
          className="login loginmodal-submit"
          name="image-text-box"
        >
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
