import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { postImage } from "../../store/imageReducer";
import img from "../images/logo32x32.png";

const CreateImageForm = ({ onClose }) => {
  const sessionUser = useSelector((state) => state.session.user);

  const dispatch = useDispatch();
  const history = useHistory();

  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState("");

  const updatedImageUrl = (e) => setImageUrl(e.target.value);
  const updatedContent = (e) => setContent(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let createdImage = {
      userId: sessionUser.id,
      imageUrl,
      content,
    };

    setErrors("");
    const newImage = await dispatch(postImage(createdImage)).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );

    if (newImage.id) {
      onClose();
      history.push(`/images/${newImage.id}`);
    }
    // if (createdImage) {
    //   const newImage = await dispatch(postImage(createdImage));

    //   history.push(`/images/${newImage.id}`);
    // }

    // const newImage = await dispatch(postImage(createdImage));
    // return history.push(`/images/${newImage.id}`);
  };

  return (
    <div className="createimg-container">
      <div className="loginmodal-container-box">
        <h1>Create a Post</h1>
        <img src={img} />
      </div>
      <br></br>
      <form onSubmit={handleSubmit}>
        <ul>{errors}</ul>
        <label>
          Image URL
          <input
            type="text"
            required={true}
            value={imageUrl}
            onChange={updatedImageUrl}
            name="image-url-box"
          />
        </label>
        <label>
          Add a caption (optional)
          <textarea
            type="text"
            value={content}
            onChange={updatedContent}
            name="image-text-box"
          />
        </label>
        <button type="submit" className="login loginmodal-submit">
          Post Image
        </button>
      </form>
    </div>
  );
};

export default CreateImageForm;
