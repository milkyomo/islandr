const LOAD_IMAGES = "images/loadImages";
const ADD_IMAGE = "images/addImage";

export const loadImages = (images) => {
  return { type: LOAD_IMAGES, images };
};

export const addImage = (newImage) => ({
  type: ADD_IMAGE,
  newImage,
});

//thunk creator for GET request
export const fetchImages = () => async (dispatch) => {
  const res = await fetch("/api/images");
  const images = await res.json();
  console.log(images);
  //run imagesActions.fetchImages()() in browser console to check
  dispatch(loadImages(images));
  return images;
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
    default:
      return state;
  }
};

export default imageReducer;
