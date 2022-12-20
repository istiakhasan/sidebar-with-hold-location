import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useState } from "react";
import CustomModal from "../../../../common/CustomModal";
import PartnerForm from "../form/PartnerForm";
import JsButton from "../../../../common/JsButton";
import { createPartner } from "../../controllers";
import PartnerListTable from "../table/PartnerListTable";
import { useQuery } from "@tanstack/react-query";
const PartnerLanding = () => {
  const { isLoading, error, data, refetch } = useQuery(["partnerlist"], () =>
    fetch("http://localhost:8080/api/v1/partner").then((res) => res.json())
  );

  const [show, setShow] = useState(false);

  const {
    handleSubmit,
    handleChange,
    values,
    setFieldValue,
    resetForm,
    isSubmitting,
  } = useFormik({
    initialValues: { name: "", phone: "" },
    enableReinitialize: true,
    onSubmit: (values) => {
      createPartner(values, () => {
        resetForm();
        setShow(false);
        refetch();
        // getPartner(setGridData);
      });
    },
  });

  if (isLoading) {
    return;
  }
  if (error) {
    return error;
  }

  return (
    <div>
      <JsButton
        style={{
          position: "absolute",
          top: "20px",
          right: "0px",
        }}
        onClick={() => setShow(true)}
      >
        + Add Partner
      </JsButton>

      {/* <PartnerListTable gridData={data?.data} /> */}

      {/* add partner modal  */}
      <CustomModal
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        setShow={setShow}
        title={"Partner Create"}
        show={show}
      >
        <PartnerForm
          setFieldValue={setFieldValue}
          values={values}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          setShow={setShow}
        />
      </CustomModal>
    </div>
  );
};

export default PartnerLanding;
