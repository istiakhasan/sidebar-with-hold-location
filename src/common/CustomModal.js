import { Modal } from "react-bootstrap";
import React from "react";
import JsButton from "./JsButton";

const CustomModal = ({
  children,
  show,
  setShow,
  title,
  handleSubmit,
  isSubmitting,
  saveRef,
  currentRowId,
  isView,
}) => {
  const handleClose = () => setShow(false); //hide modal using  click in other side of the modal

  return (
    <>
      <>
        <Modal
          show={show}
          onHide={handleClose} //hide modal using  click in other side of the modal
          size={"xl"}
          aria-labelledby="example-modal-sizes-title-xl"
        >
          <div>
            <div
              style={{
                margin: "15px 18px",
                // border: "1px solid #808080",
                padding: "5px 8px",
              }}
            >
              <div className="d-flex mb-3  align-items-center justify-content-between">
                <span>{title} </span>
                {!isView && (
                  <JsButton
                    type="button"
                    onClick={() => {
                      saveRef.current.click();
                    }}
                    // disabled={isSubmitting}
                  
                  >
                    {currentRowId ? "Edit" : "Save"}
                  </JsButton>
                )}
              </div>
              <div style={{}}>{children}</div>

              <div className="text-end mt-3">
                <JsButton style={{padding:"4px 14px",background:"red"}} onClick={() => setShow(false)}>Close</JsButton>
              </div>
            </div>
          </div>
        </Modal>
      </>
    </>
  );
};

export default CustomModal;
