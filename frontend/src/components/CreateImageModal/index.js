import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import CreateImageForm from "./CreateImageForm";

function CreateImageFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <p onClick={() => setShowModal(true)} className="postBtn">
        <i className="fa-solid fa-circle-plus"></i>
      </p>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateImageForm />
        </Modal>
      )}
    </>
  );
}

export default CreateImageFormModal;
