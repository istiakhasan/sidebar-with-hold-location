import React from "react";

const Jsinput = (props) => {
   const {type,placeholder}=props
  return <input {...props} type={type} placeholder={placeholder} />;
};

export default Jsinput;
