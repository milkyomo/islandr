import React from "react";
import { useSelector } from "react-redux";

const AllComments = function ({ image }) {
  const sessionUser = useSelector((state) => state.session.user);
  //   const image = useSelector(() => image);
  // console.log(image);

  const comments = image?.Comments;
  console.log("COMMENT USER?", comments);

  //make function if session user, show create button that leads to form modal
  //make function if session user, show delete button
  //make function to handle delete

  // console.log("username", image.Comments[0].User.username);

  return (
    <div>
      <h1>COMMENTS WILL GO HERE BETCHHHH</h1>
      <div className="comments">
        {comments?.reverse().map((comment) => (
          <div key={comment.id}>
            <h1>{comment?.User?.username}</h1>
            <p>{comment?.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllComments;
