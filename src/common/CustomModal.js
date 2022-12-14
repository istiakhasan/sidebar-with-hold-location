import { Modal } from "react-bootstrap";
import React from "react";

const CustomModal = ({ children, show, setShow, title }) => {
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
          <div style={{background:"#181818"}} >
            <div
              style={{
                margin: "15px 18px",
                border: "1px solid #808080",
                padding: "5px 8px",
              }}
            >
              <div className="d-flex  align-items-center justify-content-between">
                <span>{title} </span>
                <button className="btn btn-success btn-sm px-4">Save</button>
              </div>
              <div style={{ minHeight: "400px" }}>{children}</div>

              <div className="text-end">
                <button
                  onClick={() => setShow(false)}
                  className="btn btn-danger btn-sm px-4"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </>
    </>
  );
};

export default CustomModal;