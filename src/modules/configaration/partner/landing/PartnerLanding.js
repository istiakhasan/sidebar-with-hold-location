import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useState } from "react";
import CustomModal from "../../../../common/CustomModal";
import PartnerForm from "../form/PartnerForm";
import JsButton from "../../../../common/JsButton";
const PartnerLanding = () => {
  const [show, setShow] = useState(false);
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: { name: "", phone: "" },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <JsButton style={{
          position: "absolute",
          top: "20px",
          right: "20px"
      }} onClick={() => setShow(true)}>+ Add Partner</JsButton>

      {/* add partner modal  */}
      <CustomModal
        handleSubmit={handleSubmit}
        setShow={setShow}
        title={"Partner Create"}
        show={show}
      >
        <PartnerForm handleChange={handleChange} handleSubmit={handleSubmit} />
      </CustomModal>
    </>
  );
};

export default PartnerLanding;
