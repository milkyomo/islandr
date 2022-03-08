import { NavLink } from "react-router-dom";

const ExploreDetail = ({ id, imageUrl }) => {
  return (
    <>
      <NavLink to={`/images/${id}`}>
        <img src={imageUrl} className="single-image"></img>
      </NavLink>
    </>
  );
};

export default ExploreDetail;
