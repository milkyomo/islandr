import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import UpdateImageForm from "./UpdateImageForm";

function UpdateImageFormModal({ image }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <p onClick={() => setShowModal(true)} className="postBtn">
        <i className="fa-solid fa-pen-to-square"></i>
      </p>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UpdateImageForm image={image} onClose={() => setShowModal(false)} />
        </Modal>
      )}
    </>
  );
}

export default UpdateImageFormModal;
