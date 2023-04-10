import React, { useEffect } from "react";
import HookFormInput from "../../../../common/HookFormInput";
import { useForm } from "react-hook-form";
import JsButton from "../../../../common/JsButton";
import { useState } from "react";

const PurchaseReport = () => {
  // const { register, handleSubmit } = useForm();
  // const submitForm = (e) => {
  //    e.preventDefault()

  // };
  // const [inputField, setInputField] = useState([{ name: "", number: "" }]);
  // console.log(inputField);
  const [hierarcyTree, sethierarcyTree] = useState([
    {
      id: 1,
      child: [
        {
          id: 2,
          child: [],
        },
      ],
    },
  ]);
  const handleClick = () => {
    const newObj = { id: Math.floor(100000 + Math.random() * 900000) };
    sethierarcyTree([...hierarcyTree, newObj]);
  };
  useEffect(()=>{
   const a= [0,1,2,3].indexOf(7)
   console.log(a);
  },[])
  return (
    <div className=" d-flex">
      {/* <form onSubmit={submitForm}>
        {inputField?.map((item,i) => (
          <HookFormInput label="Name">
            <input
              // {...register("name")}
              name="name"
              type="text"
              className="js-form-input"
              placeholder="enter your name"
            />
          </HookFormInput>
        ))}
        <div className="mt-2 text-end">
          <JsButton
            onClick={() => {
              setInputField([...inputField, { name: "", number: "" }]);
            }}

          >
            Add
          </JsButton>
        </div>
        <JsButton type="submit">Submit</JsButton>
      </form> */}
      {hierarcyTree?.map((item, i) => (
        <>
          <span
            onClick={() => handleClick(item?.i)}
            className="d-flex align-items-center justify-content-center me-3"
            style={{
              display: "inline-block",
              height: "100px",
              width: "100px",
              background: "pink",
            }}
          >
            +
          </span>
        </>
      ))}
    </div>
  );
};

export default PurchaseReport;
