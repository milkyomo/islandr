import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams, Redirect } from "react-router-dom";
import { fetchImage, updateImage, deleteImage } from "../../store/imageReducer";
import img from "../images/favicon-32x32.png";

const UpdateImageForm = ({ image, onClose }) => {
  const sessionUser = useSelector((state) => state.session.user);
  //   const sessionImage = useSelector((state) => state.session);
  const imageToUpdate = useSelector(() => image);
  //   console.log("SESSIONIMAFE", imageToUpdate.imageUrl);
  //HOW TO GET IMAGE TO CHANGE THE VALUES OF IT?????? PASS IN AS CHILD?

  const dispatch = useDispatch();
  const history = useHistory();

  const [imageUrl, setImageUrl] = useState(imageToUpdate.imageUrl);
  const [content, setContent] = useState(imageToUpdate.content);
  const [errors, setErrors] = useState([]);

  const updatedImageUrl = (e) => setImageUrl(e.target.value);
  const updatedContent = (e) => setContent(e.target.value);

  const params = useParams();
  //   const id = oldId.id;
  //   console.log(id);

  useEffect(() => {
    dispatch(fetchImage(params));
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors([]);

    let updatedImage = {
      id: params.id,
      imageUrl,
      content,
    };
    // console.log("ONCLOSE", onClose);
    dispatch(updateImage(updatedImage)).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
      console.log(errors);
    });
    onClose();
    // history.push(`/images/${params.id}`);
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
          />
        </label>
        <label>
          Add a caption (optional)
          <input type="text" value={content} onChange={updatedContent} />
        </label>
        <button type="submit" className="login loginmodal-submit">
          Post Image
        </button>
      </form>
      <button
        onClick={() => {
          dispatch(deleteImage(params.id));
          history.push("/explore");
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default UpdateImageForm;
