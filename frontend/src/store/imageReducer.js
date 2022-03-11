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
  console.log("first image: ", image);
  image.Comments = image.Comments.reduce((a, b) => {
    a[b.id] = b;
    return a;
  }, {});
  // console.log("image again after: ", image);
  dispatch(loadImage(image));
  return image;
};

//thunk creator for POST image request
export const postImage = (data) => async (dispatch) => {
  const res = await csrfFetch("/api/images/new", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const newImage = await res.json();
  // console.log("THUNK NEW IMAGE: ", newImage);
  dispatch(addImage(newImage));
  return newImage;
};

//thunk creator for UPDATE image request
export const updateImage = (imageId, data) => async (dispatch) => {
  console.log("AM I IN UPDATEIMAGE THUNK?", data);
  // try {
  const res = await csrfFetch(`/api/images/${imageId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  console.log("AM I IN UPDATEIMAGE THUNK DEEPER?", res);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const updatedImage = await res.json();
  // console.log("UPDATAPTUAEPJDG IMAGE", updatedImage);
  dispatch(loadImage(updatedImage));
  return updateImage;
  // } catch (e) {
  //   console.log(e);
  // }
};

//thunk creator for REMOVE image request
export const deleteImage = (imageId) => async (dispatch) => {
  // console.log("HEY", imageId);
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
  // console.log("THIS IS postComment DATA: ", data);
  const res = await csrfFetch("/api/comment/new", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const newComment = await res.json();
  // console.log("this is postComment new Comment: ", newComment);
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
  // console.log("this is delete commentId: ", commentId);
  try {
    const res = await csrfFetch(`/api/comment/${commentId}`, {
      method: "DELETE",
    });
    const deletedId = await res.json();
    console.log("this is deletedId thunk: ", deletedId);
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
      // console.log("ACTION.IMAGES", action.images);
      newEntries = {};
      action.images.forEach((image) => (newEntries[image.id] = image));
      newState.entries = newEntries;
      return newState;
    case LOAD_IMAGE:
      // newEntries = {};
      // newEntries[action.image?.id] = action.image;
      // newState.entries = newEntries;
      console.log("newState.current LOAD_IMAGE: ", newState.current);
      newState.current = action.image;
      // console.log("THIS IS NEWSTATE.CURRENT LOAD: ", newState.current);
      // console.log("THIS IS NEWSTATE LOAD: ", newState);
      return newState;
    case ADD_IMAGE:
      // if (!state[action.newImage.id]) {
      //   newState = {
      //     ...state,
      //     // [action.newImage.id]: action.newImage,
      //     newImage: action.newImage,
      //   };
      // console.log("newState.entries before: ", newState.entries);
      // newState.current = action.newImage;
      // newState.entries[action.newImage.id] = action.newImage;
      newState.entries[action.newImage.id] = action.newImage;
      // console.log("newState.entries after: ", newState.entries);
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
      // console.log("NEWSTATE1", newState);
      // delete newState[action.imageId];
      delete newState.entries[action.imageId];
      // delete newState.current;
      // console.log("NEWSTATE2", newState);
      // console.log(action.imageId);
      return newState;
    case ADD_COMMENT:
      // console.log("THIS IS ACTION.COMMENT: ", action.comment);
      // console.log("THIS IS ACTION COMMENT: ", newState.current);
      // console.log("action.comment: ", action.comment);
      // console.log("newState.current.Comments: ", newState.current.Comments);
      const newComments = { ...newState.current.Comments };
      newComments[action.comment.id] = action.comment;
      newState.current.Comments = newComments;
      return newState;
    case REMOVE_COMMENT:
      // console.log("THIS IS ACTION", action.comment);
      // console.log("THIS IS NEWSTATE.ENTRIES: ", newState.current.Comments[action.comment]);
      console.log(
        "Inside Reducer: ",
        newState.current.Comments,
        action.commentId
      );
      delete newState.current.Comments[action.commentId];
      return newState;
    default:
      return state;
  }
};

export default imageReducer;
