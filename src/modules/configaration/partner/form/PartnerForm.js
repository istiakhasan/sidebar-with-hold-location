import Select from "react-select";
import React from "react";
import JsFormInput from "../../../../common/JsFormInput";
import customStyles from "../../../../common/customStyles";

const PartnerForm = ({ handleChange, values, setFieldValue }) => {
  return (
    <div className="global-wrappar-shadow">
      <div className="row p-0">
        <div className="col-md-3">
          <JsFormInput
            name="name"
            placeholder="Name.."
            label={"Partner Name"}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <JsFormInput
            name="phone"
            placeholder="Phone No.."
            label={"Mobile"}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <JsFormInput
            name="address"
            placeholder="Address.."
            label={" Address"}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <JsFormInput
            name="companyName"
            placeholder="Company.."
            label={"Company Name"}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <JsFormInput
            name="email"
            placeholder="email.."
            label={" Email"}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <label style={{ fontSize: "12px", marginBottom: "px" }}>
            Partner type
          </label>

          <Select
            styles={customStyles}
            name="partnerType"
            options={[
              { label: "Customer", value: 1 },
              { label: "Supplier", value: 2 },
              { label: "Both", value: 3 },
            ]}
            value={values.partnerType}
            placeholder="Partner type.."
            label={"Partner type"}
            onChange={(valueOption) => {
              setFieldValue("partnerType", valueOption);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PartnerForm;
