import { csrfFetch } from "./csrf";

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
  // console.log("IMAGEGEGEEGE", image);
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
export const updateImage = (data) => async (dispatch) => {
  const imageId = data.id;
  // try {
  const res = await csrfFetch(`/api/images/${imageId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const updatedImage = await res.json();
  console.log("UPDATAPTUAEPJDG IMAGE", updatedImage);
  dispatch(loadImage(updatedImage));
  return updateImage;
  // } catch (e) {
  //   console.log(e);
  // }
};

//thunk creator for REMOVE image request
export const deleteImage = (imageId) => async (dispatch) => {
  console.log("HEY", imageId);
  const res = await csrfFetch(`/api/images/${imageId}`, {
    method: "DELETE",
  });
  const deletedImage = await res.json();
  dispatch(removeImage(deletedImage));
  return deletedImage;
};

export const initialState = { entries: {}, isLoading: true };

const imageReducer = (state = initialState, action) => {
  let newState = { ...state };
  let newEntries;
  switch (action.type) {
    case LOAD_IMAGES:
      console.log("ACTION.IMAGES", action.images);
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
      newState.current = action.image;
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
    default:
      return state;
  }
};

export default imageReducer;
