import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import CommentForm from "./CommentForm";

function CreateCommentModal({ image }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <p onClick={() => setShowModal(true)} className="postBtn">
        <i className="fa-solid fa-circle-plus"></i>
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
