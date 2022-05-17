import { csrfFetch } from "./csrf";

//IMAGESSSSSSSSs
const LOAD_IMAGES = "images/loadImages";
const LOAD_IMAGE = "images/loadImage";
const ADD_IMAGE = "images/addImage";
const REMOVE_IMAGE = "images/removeImage";

export const loadImages = (images) => {
  return { type: LOAD_IMAGES, images };
};

export const loadImage = (image) => {
  return { type: LOAD_IMAGE, image };
};

export const addImage = (newImage) => ({
  type: ADD_IMAGE,
  newImage,
});

export const removeImage = (imageId) => ({
  type: REMOVE_IMAGE,
  imageId,
});

//thunk creator for GET ALL request
export const fetchImages = () => async (dispatch) => {
  const res = await fetch("/api/images");
  const images = await res.json();

  //run imagesActions.fetchImages()() in browser console to check
  dispatch(loadImages(images));
  return images;
};

//thunk creator for GET single image request
export const fetchImage = (imageId) => async (dispatch) => {
  const res = await fetch(`/api/images/${imageId.id}`);
  const image = await res.json();
  image.Comments = image.Comments.reduce((a, b) => {
    a[b.id] = b;
    return a;
  }, {});

  dispatch(loadImage(image));
  return image;
};

//thunk creator for POST image request
export const postImage = (data) => async (dispatch) => {
  const { userId, imageUrl, content } = data;
  const formData = new FormData();
  formData.append("userId", userId);
  formData.append("content", content);
  formData.append("imageUrl", imageUrl);

  const res = await csrfFetch("/api/images/new", {
    method: "POST",
    // headers: { "Content-Type": "application/json" },
    headers: { "Content-Type": "multipart/form-data" },
    // body: JSON.stringify(image),
    body: formData,
  });

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const newImage = await res.json();
  console.log("REDUCER NEWIMAGE!!!", newImage);

  dispatch(addImage(newImage));
  return newImage;
};

//thunk creator for UPDATE image request
export const updateImage = (imageId, data) => async (dispatch) => {
  // try {
  const res = await csrfFetch(`/api/images/${imageId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    console.log("res thunk", res);
    // throw new Error(`HTTP error! status: ${res.status}`);
    return res.errors;
  }
  const updatedImage = await res.json();

  dispatch(loadImage(updatedImage));
  return updatedImage;
  // } catch (e) {
  //   console.log(e);
  // }
};

//thunk creator for REMOVE image request
export const deleteImage = (imageId) => async (dispatch) => {
  try {
    const res = await csrfFetch(`/api/images/${imageId}`, {
      method: "DELETE",
    });
    const deletedImage = await res.json();
    dispatch(removeImage(deletedImage));
    return deletedImage;
  } catch (e) {
    console.log(e);
  }
};

//COMMENTSSSSSSSSSSSSSSS
export const ADD_COMMENT = "images/ADD_COMMENT";

export const addComment = (comment) => ({
  type: ADD_COMMENT,
  comment,
});

//thunk creator for POST comment
export const postComment = (data) => async (dispatch) => {
  const res = await csrfFetch("/api/comment/new", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const newComment = await res.json();

  dispatch(addComment(newComment));
  return newComment;
};

export const REMOVE_COMMENT = "images/REMOVE_COMMENT";

export const removeComment = (commentId) => ({
  type: REMOVE_COMMENT,
  commentId,
});
//thunk creator for DELETE comment
export const deleteComment = (commentId) => async (dispatch) => {
  try {
    const res = await csrfFetch(`/api/comment/${commentId}`, {
      method: "DELETE",
    });
    const deletedId = await res.json();

    dispatch(removeComment(deletedId));
    return deletedId;
  } catch (e) {
    console.log(e);
  }
};

export const initialState = { entries: {}, isLoading: true };

const imageReducer = (state = initialState, action) => {
  let newState = { ...state };
  let newEntries;
  switch (action.type) {
    case LOAD_IMAGES:
      newEntries = {};
      action.images.forEach((image) => (newEntries[image.id] = image));
      newState.entries = newEntries;
      return newState;
    case LOAD_IMAGE:
      // newEntries = {};
      // newEntries[action.image?.id] = action.image;
      // newState.entries = newEntries;
      newState.current = action.image;
      return newState;
    case ADD_IMAGE:
      // if (!state[action.newImage.id]) {
      //   newState = {
      //     ...state,
      //     // [action.newImage.id]: action.newImage,
      //     newImage: action.newImage,
      //   };
      // newState.current = action.newImage;
      // newState.entries[action.newImage.id] = action.newImage;
      newState.entries[action.newImage.id] = action.newImage;
      return newState;
    // }
    // return {
    //   ...state,
    //   [action.newImage.id]: {
    //     ...state[action.newImage.id],
    //     ...action.newImage,
    //   },
    // };
    case REMOVE_IMAGE:
      // delete newState[action.imageId];
      delete newState.entries[action.imageId];
      // delete newState.current;
      return newState;
    case ADD_COMMENT:
      const newComments = { ...newState.current.Comments };
      newComments[action.comment.id] = action.comment;
      newState.current.Comments = newComments;
      return newState;
    case REMOVE_COMMENT:
      delete newState.current.Comments[action.commentId];
      return newState;
    default:
      return state;
  }
};

export default imageReducer;
