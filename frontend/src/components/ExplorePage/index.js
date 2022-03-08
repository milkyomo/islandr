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
    <div className="explore-page-container">
      <h1>Get Inspired</h1>
      <div className="images">
        {images
          .slice(0)
          .reverse()
          .map(({ id, imageUrl }) => (
            <ExploreDetail key={id} id={id} imageUrl={imageUrl} />
          ))}
      </div>
    </div>
  );
}
