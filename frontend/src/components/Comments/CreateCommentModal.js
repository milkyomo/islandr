import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import CommentForm from "./CommentForm";

function CreateCommentModal({ image }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <p onClick={() => setShowModal(true)} className="postCommentBtn">
        <i className="fa-solid fa-comment-dots"></i>
      </p>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CommentForm onClose={() => setShowModal(false)} image={image} />
        </Modal>
      )}
    </>
  );
}

export default CreateCommentModal;
