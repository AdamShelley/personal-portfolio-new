import ReactDOM from "react-dom";
import { useEffect } from "react";
import styled from "styled-components";

const ModalPortalStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  img {
    max-height: 80vh;
    max-width: 80vw;
    object-fit: contain;
    border-radius: 15px;
  }
`;

const ImageModal = ({ selectedImage, closeModal }) => (
  <>
    {selectedImage && (
      <ModalPortal>
        <ModalPortalStyles onClick={closeModal}>
          <img src={selectedImage} alt="Expanded view" />
        </ModalPortalStyles>
      </ModalPortal>
    )}
  </>
);

export default ImageModal;

const ModalPortal = ({ children }) => {
  const modalRoot = document.getElementById("modal-root");
  const el = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  }, [el, modalRoot]);

  return ReactDOM.createPortal(children, el);
};
