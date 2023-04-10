import React from 'react';

const HookFormInput = (props) => {
    const { error, label,inputfield,children } = props;

    return (
      <div style={{ display: "flex", flexDirection: "column" }} className="">
        <label style={{ fontSize: "12px", marginBottom: "4px" }}>{label}</label>

       {children}

        <small style={{ color: "red", fontSize: "10px", fontWeight: "bold" }}>
          {error}
        </small>
      </div>
    );
};

export default HookFormInput;