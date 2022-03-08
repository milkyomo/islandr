import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";
import { postImage } from "../../store/imageReducer";

import "./CreateImageForm.css";

const CreateImageForm = () => {
  const sessionUser = useSelector((state) => state.session.user);

  const dispatch = useDispatch();
  const history = useHistory();

  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");

  const updatedImageUrl = (e) => setImageUrl(e.target.value);
  const updatedContent = (e) => setContent(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let createdImage = {
      userId: sessionUser.id,
      imageUrl,
      content,
    };

    // console.log("CREATED IMAGE ID", createdImage);

    if (createdImage) {
      const newImage = await dispatch(postImage(createdImage));

      history.push(`/images/${newImage.id}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          value={imageUrl}
          onChange={updatedImageUrl}
        />
        <input type="text" value={content} onChange={updatedContent} />
        <button type="submit">Post Image</button>
      </form>
    </div>
  );
};

export default CreateImageForm;
