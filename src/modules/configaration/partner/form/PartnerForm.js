import Select from "react-select";
import React from "react";
import JsFormInput from "../../../../common/JsFormInput";
import customStyles from "../../../../common/customStyles";
import { useEffect } from "react";
import usePartner from "../action/usePartner";
import Loading from "../../../../common/loding";

const PartnerForm = ({ currentRowId, refetch, saveRef, setShow, isView }) => {
  const { partnerGetById, formikProps, loading } = usePartner(
    refetch,
    setShow,
    currentRowId
  );

  useEffect(() => {
    if (currentRowId) {
      partnerGetById(currentRowId);
    }
  }, [currentRowId]);

  const { handleSubmit, values, setFieldValue, handleChange, isSubmitting } =
    formikProps;
  // if(!loading){
  //   return <Loading />
  // }
  return (
    <div style={{ position: "relative" }} className="global-wrappar-shadow">
  { loading &&   <div
        style={{
          position: "absolute",
          background: "rgba(0,0,0,0.5)",
          height: "100%",
          width: "100%",
          left: "0",
          zIndex: "1000",
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          borderRadius:"10px"
          
        }}
      >
        <div style={{color:"red",fontWeight:"bold"}}>Loading</div>
      </div>}
      <form onSubmit={handleSubmit} className="row p-0">
        <div className="col-md-3">
          <JsFormInput
            name="name"
            value={values.name}
            placeholder="Name.."
            label={"Partner Name"}
            onChange={handleChange}
            disabled={isView}
          />
        </div>
        <div className="col-md-3">
          <JsFormInput
            name="mobile"
            placeholder="Phone No.."
            label={"Mobile"}
            onChange={handleChange}
            value={values.mobile}
            disabled={isView}
          />
        </div>
        <div className="col-md-3">
          <JsFormInput
            name="address"
            placeholder="Address.."
            label={" Address"}
            onChange={handleChange}
            value={values.address}
            disabled={isView}
          />
        </div>
        <div className="col-md-3">
          <JsFormInput
            name="companyName"
            placeholder="Company.."
            label={"Company Name"}
            onChange={handleChange}
            value={values.companyName}
            disabled={isView}
          />
        </div>
        <div className="col-md-3">
          <JsFormInput
            name="email"
            placeholder="email.."
            label={" Email"}
            onChange={handleChange}
            value={values.email}
            disabled={isView}
          />
        </div>
        <div className="col-md-3">
          <label style={{ fontSize: "12px", marginBottom: "px" }}>
            Partner type
          </label>

          <Select
            styles={customStyles}
            name="partnerType"
            isDisabled={isView}
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

        <button
          className="d-none"
          disabled={isSubmitting}
          ref={saveRef}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PartnerForm;
