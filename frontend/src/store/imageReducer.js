import { csrfFetch } from "./csrf";

const LOAD_IMAGES = "images/loadImages";
const LOAD_IMAGE = "images/loadImage";
const ADD_IMAGE = "images/addImage";

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
  try {
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
  } catch (e) {
    console.log(e);
  }
};

const initialState = { entries: {}, isLoading: true };

const imageReducer = (state = initialState, action) => {
  let newState;
  let newEntries;
  switch (action.type) {
    case LOAD_IMAGES:
      newState = { ...state };
      newEntries = {};
      action.images.forEach((image) => (newEntries[image.id] = image));
      newState.entries = newEntries;
      return newState;
    case LOAD_IMAGE:
      newState = { ...state };
      newEntries = {};
      newEntries[action.image?.id] = action.image;
      newState.entries = newEntries;
      return newState;
    case ADD_IMAGE:
      if (!state[action.newImage.id]) {
        newState = {
          ...state,
          // [action.newImage.id]: action.newImage,
          newImage: action.newImage,
        };
        return newState;
      }
      return {
        ...state,
        [action.newImage.id]: {
          ...state[action.newImage.id],
          ...action.newImage,
        },
      };
    default:
      return state;
  }
};

export default imageReducer;
