import { useFormik } from "formik";
import React, { useState } from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import Select from "react-select";
import Jsinput from "../../../../common/JsFormInput";
import customStyles from "../../../../common/customStyles";
import auth from "../../../../firebase.config/firebase.config";
import JsButton from "../../../../common/JsButton";
import MuiCommonIcon from './../../../../common/MuiCommonIcon';
import JsFormInput from './../../../../common/JsFormInput';
const PurchaseOrderForm = () => {
  const [user, loading] = useAuthState(auth);
  const [supplierList, setSupplierList] = useState([]);
  const [itemList, setItemList] = useState([]);

  const { selectedBranch } = useSelector((state) => state.authReducer);
  const [rowDto, setRowDto] = useState([]);
  const formikProps = useFormik({
    enableReinitialize: true,
    initialValues: {
      supplier: "",
      item: "",
    },
  });

  const filterColors = (inputValue) => {
    return itemList.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };
  const loadOptions = (inputValue, cb) => {
    if (inputValue?.length < 3) return [];
    setTimeout(() => {
      cb(filterColors(inputValue));
    }, 1000);
  };

  useEffect(() => {
    fetch(
      `http://localhost:8080/api/v1/partner/partnerType/1?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setSupplierList(data?.data));
  }, []);

  useEffect(() => {
    fetch(
      `http://localhost:8080/api/v1/product/?email=${user?.email}&branchId=${selectedBranch?.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        const _itemList = data?.data?.map((item) => {
          return {
            ...item,
            label: item.itemName,
            value: item.itemCode,
          };
        });
        setItemList(_itemList);
      });
  }, [selectedBranch, user?.email]);

  const handleRowDto = (value) => {
    console.log(value, "values");

    const isAlreadyExist = rowDto?.find(
      (itm) => itm?.item?.value === value?.item?.value
    );
    if (isAlreadyExist) {
      return alert("exist");
    }
    setRowDto([...rowDto, value]);

    //   return
    //  const found=rowDto.some(elemt=>elemt.value===option.value)
    //  if(found){
    //   alert("Item already exist .....")
    //  }else{
    //   setRowDto(...rowDto,option)
    //  }
  };
  console.log(rowDto, "row data check ");
  return (
    <form>
      <div
        style={{ border: "1px solid #C0C0C0" }}
        className="row  m-0 p-0 py-3 rounded-2"
      >
        <div
          style={{ height: "fit-content" }}
          className="col-md-8 row    m-0 p-0 "
        >
          <div className="col-md-6">
            <label style={{ fontSize: "13px" }}>Supplier</label>
            <Select
              value={formikProps.values?.supplier}
              options={supplierList}
              onChange={(valueOption) => {
                formikProps.setFieldValue("supplier", valueOption);
              }}
              name="supplier"
              styles={customStyles}
            />
          </div>

          <div className="col-md-6">
            <label style={{ fontSize: "13px" }}>Item</label>

            <Select
              styles={customStyles}
              options={itemList}
              onChange={(valueOption) => {
                formikProps.setFieldValue("item", valueOption);
                handleRowDto({ ...formikProps.values, item: valueOption });
              }}
              value={formikProps.values.item}
            />
            {/* <AsyncSelect
              cacheOptions
              styles={customStyles}
              onChange={(valueOption) => {
                formikProps.setFieldValue("item", valueOption);
                handleRowDto(
                  itemList,
                  formikProps.values,
                  setRowDto,
                  rowDto
                )
              }}
              value={formikProps.values.item}
              loadOptions={loadOptions}
              defaultOptions
            /> */}
          </div>

          {rowDto.length > 0 && (
            <div className="col-md-12 ">
              <table className="is-table mt-3 w-full">
                <thead>
                  <tr style={{ background: "#C0C0C0" }}>
                    <th>SL</th>
                    <th>Item Info</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Discount</th>
                    <th  className="text-end">Total</th>
                    <th style={{width:"100px"}}   className="text-end">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {rowDto?.map((item, i) => (
                    <tr>
                      <td>{i+1}</td>
                      <td>{item?.item?.itemName}</td>
                      <td>{item?.item?.purchasePrice}</td>
                      <td style={{width:"100px"}}><JsFormInput /></td>
                      <td style={{width:"100px"}}><JsFormInput /></td>
                
                      <td className="text-end" >120.00</td>
                      <td style={{width:"100px"}} className="text-end"><MuiCommonIcon color={"red"} name={"delete"} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        <div
          style={{ borderLeft: ".1px solid #C0C0C0 ", borderLeftWidth: ".2px" }}
          className="col-md-4 pe-5 ps-3"
        >
          <span>Purchase Checkout</span>
          <Jsinput type="date" label="Date" />
          <p
            style={{ fontSize: "14px" }}
            className="d-flex align-items-center justify-content-between"
          >
            <span>Item Total</span>
            <span style={{ fontWeight: "normal" }}>$00.00</span>
          </p>
          <p
            style={{ fontSize: "14px" }}
            className="d-flex align-items-center justify-content-between"
          >
            <span>Item Price</span>
            <span style={{ fontWeight: "normal" }}>$00.00</span>
          </p>
          <p
            style={{ fontSize: "14px" }}
            className="d-flex align-items-center justify-content-between"
          >
            <span>Net Discount</span>
            <span style={{ fontWeight: "normal" }}>$00.00</span>
          </p>
          <p
            style={{ fontSize: "14px" }}
            className="d-flex align-items-center justify-content-between"
          >
            <span> Discount</span>
            <span style={{ fontWeight: "normal" }}>$00.00</span>
          </p>
          <p
            style={{ fontSize: "14px" }}
            className="d-flex align-items-center justify-content-between"
          >
            <span> Others Charge</span>
            <span style={{ fontWeight: "normal" }}>$00.00</span>
          </p>
          <p
            style={{ fontSize: "14px" }}
            className="d-flex align-items-center justify-content-between"
          >
            <span> Purchase Total</span>
            <span style={{ fontWeight: "normal" }}>$00.00</span>
          </p>
          <p
            style={{ fontSize: "14px" }}
            className="d-flex align-items-center justify-content-between"
          >
            <span>Advance Cash </span>
            <span style={{ fontWeight: "normal" }}>$00.00</span>
          </p>
          <JsButton sx={{ width: "100%" }}>Checkout</JsButton>
        </div>
      </div>
    </form>
  );
};

export default PurchaseOrderForm;
