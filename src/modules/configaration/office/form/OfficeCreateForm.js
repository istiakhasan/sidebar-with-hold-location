import React, { useState } from "react";
import JsFormInput from "../../../../common/JsFormInput";
import Select from "react-select";
import customStyles from "../../../../common/customStyles";
import JsButton from "../../../../common/JsButton";
import useOffice from "../action/useOffice";
import { useSelector } from "react-redux";

const OfficeCreateForm = () => {
  const { formikProps } = useOffice();
  const { values, handleChange } = formikProps;
  const {branch}=useSelector(state=>state.authReducer)
  return (
    <form onSubmit={formikProps.handleSubmit}>
      <JsButton
        type="submit"
        style={{
          position: "absolute",
          top: "0",
          right: "0px",
        }}
        // onClick={() => setShow(true)}
      >
        {/* + Create Office */}
        Save
      </JsButton>
      <div className="row component-background-color m-0 p-0 py-4">
        <div className="col-md-3">
          <label style={{ fontSize: "13px" }}>Business Unit</label>
          <Select
            value={values?.businessUnit}
            options={branch}
            onChange={(valueOption) => {
              formikProps.setFieldValue("businessUnit", valueOption);
            }}
            name="businessUnit"
            styles={customStyles}
          />
        </div>
        <div className="col-md-3">
          <JsFormInput
            placeholder="Office Name"
            name="officeName"
            label="Office Name"
            value={values.officeName}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <JsFormInput
            placeholder="email"
            name="officeEmail"
            label="Office Email"
            value={values.officeEmail}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <JsFormInput
            value={values.address}
            onChange={handleChange}
            placeholder="address"
            name="address"
            label="Address"
          />
        </div>
        <div className="col-md-3">
          <JsFormInput
            placeholder="phone"
            name="phone"
            label="phone"
            value={values.phone}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <label style={{ fontSize: "13px" }}>District</label>
          <Select
            value={values.district}
            name="district"
            styles={customStyles}
          />
        </div>
      </div>
    </form>
  );
};

export default OfficeCreateForm;
