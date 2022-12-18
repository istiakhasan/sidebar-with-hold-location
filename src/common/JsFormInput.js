import React from "react";

const JsFormInput = (props) => {
  const { type, placeholder, error,label } = props;

  return (
    <div style={{display:"flex",flexDirection:"column"}} className="">
      <label style={{fontSize:"12px",marginBottom:"4px"}}>{label}</label>
      <input style={{}} {...props} className={"js-form-input"} type={type} placeholder={placeholder} />
      <small style={{ color: "red", fontSize: "10px", fontWeight: "bold" }}>
        {error}
      </small>
    </div>
  );
};

export default JsFormInput;