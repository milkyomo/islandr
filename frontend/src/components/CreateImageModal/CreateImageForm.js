import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";
import { postImage } from "../../store/imageReducer";
import img from "../images/favicon-32x32.png";

const CreateImageForm = ({ onClose }) => {
  const sessionUser = useSelector((state) => state.session.user);

  const dispatch = useDispatch();
  const history = useHistory();

  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState([]);

  const updatedImageUrl = (e) => setImageUrl(e.target.value);
  const updatedContent = (e) => setContent(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // setErrors([]);

    let createdImage = {
      userId: sessionUser.id,
      imageUrl,
      content,
    };

    setErrors([]);
    const newImage = await dispatch(postImage(createdImage)).catch(
      async (res) => {
        const data = await res.json();
        // console.log("this is data: ", data);
        if (data && data.errors) setErrors(data.errors);
        // console.log(errors);
      }
    );

    if (!errors) {
      onClose();
      history.push(`/images/${newImage.id}`);
    }

    // console.log("CREATED IMAGE ID", createdImage);

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
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label>
          Image URL
          <input
            type="text"
            required={true}
            value={imageUrl}
            onChange={updatedImageUrl}
          />
        </label>
        <label>
          Add a caption (optional)
          <input type="text" value={content} onChange={updatedContent} />
        </label>
        <button
          type="submit"
          className="login loginmodal-submit"
          name="image-text-box"
        >
          Post Image
        </button>
      </form>
    </div>
  );
};

export default CreateImageForm;
