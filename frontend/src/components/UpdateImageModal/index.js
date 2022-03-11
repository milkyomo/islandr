import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import UpdateImageForm from "./UpdateImageForm";
import "./UpdateImageForm.css";

function UpdateImageFormModal({ image }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="update-image-form">
      <p onClick={() => setShowModal(true)} className="updateImgBtn">
        <i className="fa-solid fa-pen-to-square"></i>
      </p>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UpdateImageForm image={image} onClose={() => setShowModal(false)} />
        </Modal>
      )}
    </div>
  );
}

export default UpdateImageFormModal;
