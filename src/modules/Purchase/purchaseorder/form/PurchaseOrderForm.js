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
import MuiCommonIcon from "./../../../../common/MuiCommonIcon";
import JsFormInput from "./../../../../common/JsFormInput";
import moment from "moment/moment";
import {
  calculateTotal,
  getItemList,
  getPurchaseOrderLanding,
  getSupplierList,
  handleRowDto,
  handleSaveData,
} from "../action/purchaseAction";
import { toast } from "react-toastify";
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
    onSubmit: (values) => {
      handleSaveData(rowDto,totalPrice, user?.email, selectedBranch?.value,values, (res) => {
        if(res?.status){
          toast.success("Checkout successfully")
          setRowDto([])
          
          formikProps.resetForm()
        }
        
      });
    },
  });
  const totalPrice=rowDto?.reduce((pre, next) => +pre + (+next?.total || 0), 0)

  useEffect(() => {
    getItemList(user, selectedBranch, setItemList);
    getSupplierList(user, setSupplierList);
  }, [selectedBranch, user?.email, user]);
  
  return (
    <form onSubmit={formikProps?.handleSubmit}>
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
                handleRowDto(
                  { ...formikProps.values, item: valueOption },
                  rowDto,
                  setRowDto
                );
              }}
              value={formikProps.values.item}
            />
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
                    <th className="text-end">Total</th>
                    <th style={{ width: "100px" }} className="text-end">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rowDto?.map((item, i) => (
                    <tr>
                      <td>{i + 1}</td>
                      <td>{item?.itemName}</td>
                      <td>{item?.purchasePrice}</td>
                      <td style={{ width: "100px" }}>
                        <JsFormInput
                          onChange={(e) => {
                            calculateTotal(
                              item?.discount || 0,
                              i,
                              item?.purchasePrice,
                              e.target.value,
                              rowDto,
                              setRowDto
                            );
                          }}
                        />
                      </td>
                      <td style={{ width: "100px" }}>
                        <JsFormInput
                          onChange={(e) => {
                            calculateTotal(
                              e.target.value,
                              i,
                              item?.purchasePrice,
                              item?.quantity || 0,
                              rowDto,
                              setRowDto
                            );
                          }}
                        />
                      </td>

                      <td className="text-end">{item?.total}</td>
                      <td style={{ width: "100px" }} className="text-end">
                        <span
                          onClick={() => {
                            const filter = rowDto.filter(
                              (dt) => dt.value !== item?.value
                            );
                            setRowDto(filter);
                          }}
                        >
                          <MuiCommonIcon color={"red"} name={"delete"} />
                        </span>
                      </td>
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
          <Jsinput
            type="date"
            value={moment().format("YYYY-MM-DD")}
            label="Date"
          />
          <p
            style={{ fontSize: "14px" }}
            className="d-flex align-items-center justify-content-between"
          >
            <span>Item Total</span>
            <span style={{ fontWeight: "normal" }}>
              {rowDto?.reduce((pre, next) => +pre + (+next?.quantity || 0), 0)}
            </span>
          </p>
          <p
            style={{ fontSize: "14px" }}
            className="d-flex align-items-center justify-content-between"
          >
            <span>Item Price</span>
            <span style={{ fontWeight: "normal" }}>
              {/* {rowDto?.reduce((pre, next) => +pre + (+next?.total || 0), 0)} */}
              {totalPrice}
            </span>
          </p>
          <p
            style={{ fontSize: "14px" }}
            className="d-flex align-items-center justify-content-between"
          >
            <span>Total Discount</span>
            <span style={{ fontWeight: "normal" }}>
              {rowDto?.reduce(
                (pre, next) => (+pre || 0) + (+next?.discountInTk || 0),
                0
              )}
              tk
            </span>
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
          <JsButton type="submit" sx={{ width: "100%" }}>
            Checkout
          </JsButton>
        </div>
      </div>
    </form>
  );
};

export default PurchaseOrderForm;
