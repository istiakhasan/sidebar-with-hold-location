import { useFormik } from "formik";
import React from "react";
import MainLayout from "../../../common/MainLayout";
import * as yup from "yup";
import Select from "react-select";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {  useNavigate } from "react-router-dom";
import CustomModal from "../../../common/CustomModal";
import { useState } from "react";
import CheckBox from "./CheckBox";



const FormikYup = () => {
  const [show,setShow]=useState(false)
  let schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    fruits: yup
      .object()
      .shape({
        label: yup.string().required("Required"),
        value: yup.string().required("Required"),
      })
      .nullable(),
    // age: yup.string().required("Age is required"),
  });
  const {
    handleSubmit,
    values,
    handleChange,
    errors,
    setFieldValue,
    touched,
    isSubmitting,
    resetForm,
  } = useFormik({
    initialValues: {
      name: "",
      age: "23",
      fruits: "",
    },
    onSubmit: (values) => {
      console.log(values);
      resetForm();
    },
    validationSchema: schema,
  });

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  //   console.log(errors, "Formik values");
 const navigate=useNavigate()

//  

const checkData = [
  { id: 1, label: "item1" },
  { id: 2, label: "item2" },
  { id: 3, label: "item3" },
  { id: 4, label: "item4" },
  { id: 5, label: "item5" },
  { id: 6, label: "item6" },
  { id: 7, label: "item7" },
  { id: 8, label: "item8" },
  { id: 9, label: "item9" },
  { id: 10, label: "item10" },
  { id: 11, label: "item11" },
  { id: 12, label: "item12" },
];
const [data,setData]=useState(checkData)
console.log(values,"values checked")
  return (
    <MainLayout>
      <small
        style={{ borderBottom: "2px solid red" }}
        className="fw-bold bg-red-500"
      >
        Formik Yup Validation{" "}
      </small>

      <div>
        <br />
        <br />
        <Button
          onClick={() => navigate(`/example/${123}/${"create"}`)}
          variant="contained"
          endIcon={<SendIcon />}
        > 
          Send
        </Button>
      </div>
      <div>
        <br />
        <br />
        <Button
         onClick={()=>setShow(true)}
          variant="contained"
          
        > 
          CheckBox
        </Button>
      </div>

      <div className="mt-2">
        <form style={{ width: "300px" }} onSubmit={handleSubmit}>
          {errors.name && (
            <small style={{ color: "red" }} className="text-red ">
              {errors.name}
            </small>
          )}{" "}
          <br />
          <input
            className="mb-2 w-100"
            value={values.name}
            onChange={handleChange}
            placeholder="Name"
            name="name"
            type="text"
          />{" "}
          <br />
          <input
            className="mb-2 w-100"
            value={values.age}
            onChange={handleChange}
            placeholder="Age"
            name="age"
            type="text"
          />{" "}
          <br />
          {errors.fruits && (
            <small style={{ color: "red" }} className="text-red ">
              {errors?.fruits?.value}
            </small>
          )}{" "}
          <br />
          <Select
            name="fruits"
            value={values.fruits}
            errors={errors}
            touched={touched}
            options={options}
            onChange={(valueOption) => {
              setFieldValue("fruits", valueOption);
            }}
          />{" "}
          <br />
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary outlined"
          >
            Submit
          </button>
          <CustomModal show={show} setShow={setShow}>
                      <CheckBox setFieldValue={setFieldValue}  data={data} setData={setData}/>
          </CustomModal>
        </form>
      </div>
    </MainLayout>
  );
};

export default FormikYup;
