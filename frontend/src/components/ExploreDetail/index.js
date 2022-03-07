import { NavLink } from "react-router-dom";

const ExploreDetail = ({ id, imageUrl }) => {
  return (
    <li>
      <NavLink to={`/images/${id}`}>
        <img src={imageUrl}></img>
      </NavLink>
    </li>
  );
};

export default ExploreDetail;
