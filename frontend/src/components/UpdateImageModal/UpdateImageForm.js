import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams, Redirect } from "react-router-dom";
import { fetchImage, updateImage, deleteImage } from "../../store/imageReducer";
import img from "../images/logo32x32.png";

const UpdateImageForm = ({ image, onClose }) => {
  const sessionUser = useSelector((state) => state.session.user);

  const imageToUpdate = useSelector(() => image);

  const dispatch = useDispatch();
  const history = useHistory();

  const [imageUrl, setImageUrl] = useState(imageToUpdate.imageUrl);
  const [content, setContent] = useState(imageToUpdate.content);
  const [errors, setErrors] = useState([]);

  const updatedImageUrl = (e) => setImageUrl(e.target.value);
  const updatedContent = (e) => setContent(e.target.value);

  const params = useParams();

  useEffect(() => {
    dispatch(fetchImage(image));
  }, [dispatch]);

  const handleDelete = async (e) => {
    e.preventDefault();

    let res = await dispatch(deleteImage(image.id));
    // dispatch(fetchImages());
    if (res) {
      history.push("/explore");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let updatedImage = {
      id: image.id,
      imageUrl,
      content,
    };

    setErrors([]);
    dispatch(updateImage(params.id, updatedImage)).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });

    if (!errors.length) {
      onClose();
      // history.push(`/images/${params.id}`);
      // dispatch(fetchImage(image.id));
    }
  };

  return (
    <div className="createimg-container">
      <div className="loginmodal-container-box">
        <h1>Edit your post</h1>
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
            required
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
          Update Image
        </button>
      </form>
      <button
        onClick={(e) => {
          handleDelete(e);
        }}
        className="updatemodal-delete"
      >
        Delete Image
      </button>
    </div>
  );
};

export default UpdateImageForm;
