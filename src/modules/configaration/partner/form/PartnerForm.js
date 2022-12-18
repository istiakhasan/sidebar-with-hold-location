import React from "react";
import JsFormInput from "../../../../common/JsFormInput";

const PartnerForm = ({ handleChange }) => {
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
          <JsFormInput
            name="partherType"
            placeholder="Partner type.."
            label={"Partner type"}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default PartnerForm;
