import React from "react";

import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
const Modal = (prop) => {
  const Backdrop = () => {
    return <div className={classes.backdrop} onClick={prop.onCloseBackdrop}></div>;
  };

  const ModalOverlay = (prop) => {
    return (
      <div className={classes.modal}>
        <div>{prop.children}</div>
      </div>
    );
  };

  //here we use {prop.children}, inside <div> because we will enclose the card inside this modal, will act like Card, but function as modal
  //In Backdrop we do not use this(prop.children), because here in backdrop we want to reder it alone, it will contain nothing in it.But only itself

  const portalElement = document.getElementById("modal-root");
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCloseBackdrop={prop.onCloseBackdrop} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{prop.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;


//here in Backdrop we are using function onClick, which will get fire in the Cart attribute (i.e"onCloseBackdrop={prop.onClose}")