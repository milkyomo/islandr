import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages } from "../../store/imageReducer";
import ExploreDetail from "../ExploreDetail";
import "./ExplorePage.css";

export default function ExplorePage() {
  const dispatch = useDispatch();
  const imagesObject = useSelector((state) => state.imageState.entries);
  const images = Object.values(imagesObject);

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  return (
    <div>
      <h1>Explore Page</h1>
      <div>
        {images.map(({ id, imageUrl }) => (
          <ExploreDetail key={id} id={id} imageUrl={imageUrl} />
        ))}
      </div>
    </div>
  );
}
