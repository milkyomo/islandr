import { NavLink } from "react-router-dom";

const ExploreDetail = ({ id, imageUrl }) => {
  return (
    <>
      <NavLink to={`/images/${id}`}>
        <img src={imageUrl}></img>
      </NavLink>
    </>
  );
};

export default ExploreDetail;
