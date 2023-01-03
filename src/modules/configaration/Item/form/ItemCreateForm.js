import { useFormik } from "formik";
import React from "react";
import JsButton from "../../../../common/JsButton";
import Select from "react-select";
import JsFormInput from "../../../../common/JsFormInput";
import customStyles from "../../../../common/customStyles";
import { useSelector } from "react-redux";
import { createItem } from "../action/ItemAction";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.config/firebase.config";
const ItemCreateForm = () => {
    const {selectedBranch}=useSelector(state=>state.authReducer)
    const [user]=useAuthState(auth)
  const formikProps = useFormik({
    initialValues: {
      itemName: "",
      itemType: "",
      sellingPrice: "",
      itemCategory: "",
      purchasePrice: "",
      itemCode: "",
      uom: "",
      barCode: "",
      description:"",
      minimumQuantity:"",
      maximumQuantity:''
    },
    onSubmit:(values)=>{
       createItem(values,selectedBranch,user.email,(res)=>console.log(res))
    }
  });
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
          <JsFormInput
            placeholder="Office Name"
            name="itemName"
            label="Item Name"
            value={formikProps.values.itemName}
            onChange={formikProps.handleChange}
          />
        </div>
        <div className="col-md-3">
          <label style={{ fontSize: "13px" }}>Item Type</label>
          <Select
            value={formikProps?.values?.itemType}
            options={[
              { label: "finish product", value: 1 },
              { label: "Row material", value: 2 },
            ]}
            onChange={(valueOption) => {
              formikProps.setFieldValue("itemType", valueOption);
            }}
            name="itemType"
            styles={customStyles}
          />
        </div>
        <div className="col-md-3">
          <label style={{ fontSize: "13px" }}>Item Category</label>
          <Select
            value={formikProps?.values?.itemCategory}
            options={[
              { label: "finish product", value: 1 },
              { label: "Row material", value: 2 },
            ]}
            onChange={(valueOption) => {
              formikProps.setFieldValue("itemCategory", valueOption);
            }}
            name="itemCategory"
            styles={customStyles}
          />
        </div>
        <div className="col-md-3">
          <JsFormInput
            placeholder="Price"
            name="sellingPrice"
            label="Selling Price"
            value={formikProps?.values?.sellingPrice}
            onChange={formikProps.handleChange}
          />
        </div>
        <div className="col-md-3">
          <JsFormInput
            placeholder="Price"
            name="purchasePrice"
            label="Purchase Price"
            value={formikProps?.values?.purchasePrice}
            onChange={formikProps.handleChange}
          />
        </div>
        <div className="col-md-3">
          <JsFormInput
            placeholder="Code"
            name="itemCode"
            label="Item code"
            value={formikProps?.values?.itemCode}
            onChange={formikProps.handleChange}
          />
        </div>
        <div className="col-md-3">
          <label style={{ fontSize: "13px" }}>UOM</label>
          <Select
            value={formikProps?.values?.uom}
            options={[
              { label: "finish product", value: 1 },
              { label: "Row material", value: 2 },
            ]}
            onChange={(valueOption) => {
              formikProps.setFieldValue("uom", valueOption);
            }}
            name="uom"
            styles={customStyles}
          />
        </div>
        <div className="col-md-3">
          <JsFormInput
            placeholder="bar code"
            name="barCode"
            label="Bar Code"
            value={formikProps.values.barCode}
            onChange={formikProps.handleChange}
          />
        </div>
        <div className="col-md-3">
          <JsFormInput
            placeholder="description"
            name="description"
            label="Description"
            value={formikProps.values.description}
            onChange={formikProps.handleChange}
          />
        </div>
        <div className="col-md-3">
          <JsFormInput
            placeholder="Mini quantity"
            name="minimumQuantity"
            label="Minimum Stock Quantity"
            value={formikProps.values.minimumQuantity}
            onChange={formikProps.handleChange}
          />
        </div>
        <div className="col-md-3">
          <JsFormInput
            placeholder="Max quantity"
            name="maximumQuantity"
            label="Maximum Stock Quantity"
            value={formikProps.values.maximumQuantity}
            onChange={formikProps.handleChange}
          />
        </div>
        
      </div>
    </form>
  );
};

export default ItemCreateForm;
