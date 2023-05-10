import React from "react";
import JsFormInput from "../../../../common/JsFormInput";
import Select from "react-select";
import customStyles from "../../../../common/customStyles";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import MuiCommonIcon from "../../../../common/MuiCommonIcon";
import { toast } from "react-toastify";
import LocalConvenienceStoreIcon from "@mui/icons-material/LocalConvenienceStore";
import { NumberFormate } from "../../../../common/NumberFormate";
import JsButton from "../../../../common/JsButton";
import moment from "moment";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.config/firebase.config";
import Loading from "../../../../common/loding";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
const SalesDeliveryForm = ({ deliveryItem }) => {
  const [rowDto, setRowDto] = useState(deliveryItem);
  const [user, loading] = useAuthState(auth);
  const { selectedBranch } = useSelector((state) => state?.authReducer);
  const [mergeProduct, setMergeProduct] = useState([]);

  const {
    data: inventory_product,
    isLoading,
    error,
  } = useQuery(["stock_quantity", selectedBranch?.value], async () => {
    const res = await fetch(
      `http://localhost:8080/api/v1/stock?email=${user.email}&branchId=${
        selectedBranch?.value || ""
      }`
    );

    return res.json();
  });

  useEffect(() => {
    const modifyed_product = deliveryItem?.products?.map((item, i) => {
      const stock_product = inventory_product?.find(
        (nesitem) => nesitem?.itemName === item?.item?.label
      );

      return {
        ...item,
        stock_quantity: stock_product?.quantity,
        stock: stock_product?.quantity,
      };
    });
    setMergeProduct(modifyed_product);
  }, [inventory_product]);

  const { values, handleSubmit, setFieldValue } = useFormik({
    initialValues:{

    },
    onSubmit: (value) => {
      console.log(mergeProduct, "merge product");
    },
  });

  if (isLoading) {
    return;
  }
  if (loading) {
    return <Loading />;
  }

  return (
    <form
      style={{ border: "1px solid #C0C0C0" }}
      className="row  m-0 p-0 py-3 rounded-2"
      onSubmit={handleSubmit}
    >
      <div className="col-md-8">
        <div className="row">
          <div className="col-md-3">
            <JsFormInput label="Remark" placeholder="Remark" />
          </div>

          <div className="col-md-12">
            <div className="table-responsive">
              <table>
                <thead>
                  <tr style={{ background: "#C0C0C0" }}>
                    <th>SL</th>
                    <th>Item</th>
                    <th className="text-center">Quantity</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">Sub Total</th>
                    {/* <th className="text-end pe-2">Action</th> */}
                  </tr>
                </thead>
                <tbody>
                  {mergeProduct?.map((v, i) => {
                    return (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>
                          <p className="mb-0">{v?.item?.label}</p>
                          <p className="mb-0 d-flex align-items-center gap-1">
                            <LocalConvenienceStoreIcon
                              sx={{ fontSize: "14px" }}
                            />
                            <span
                              style={{
                                color: `${
                                  +v?.stock_quantity === 0 ? "red" : "green"
                                }`,
                                fontWeight: "400",
                              }}
                            >
                              {NumberFormate(+v?.stock_quantity) || 0.0}
                            </span>
                          </p>
                        </td>
                        <td style={{ width: "140px" }}>
                          <JsFormInput
                            value={v.purchase_quantity}
                            onChange={(e) => {
                              let numberRegex = /^\d+$/;
                              if (e.target.value > v?.stock) {
                                return toast.error(
                                  "Purchase quantity should not be geater then stock quantity.."
                                );
                              } else if (
                                !numberRegex.test(e.target.value) &&
                                e.target.value !== ""
                              ) {
                                return toast.error(
                                  "Please enter a posetive number"
                                );
                              } else if (
                                +e.target.value === 0 &&
                                e.target.value !== ""
                              ) {
                                return toast.error("Number should not be zero");
                              }

                              const _data = [...mergeProduct];
                              _data[i]["purchase_quantity"] = e.target.value;
                              _data[i]["stock_quantity"] =
                                _data[i]["stock"] - +e.target.value;
                              setMergeProduct(_data);
                            }}
                            placeholder="qty"
                          />
                        </td>

                        <td style={{ width: "140px" }}>
                          <JsFormInput
                            value={v.purchase_price}
                            onChange={(e) => {
                              const _data = [...mergeProduct];
                              _data[i]["purchase_price"] = e.target.value;
                              setMergeProduct(_data);
                            }}
                            placeholder="price"
                          />
                        </td>

                        <td className="text-center">
                          {+v.purchase_price * +v.purchase_quantity || "--"}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ borderLeft: ".1px solid #C0C0C0 ", borderLeftWidth: ".2px" }}
        className="col-md-4 pe-5 ps-3"
      >
        <span>Purchase Checkout</span>
        <JsFormInput
          type="date"
          value={moment().format("YYYY-MM-DD")}
          label="Date"
        />
        <p
          style={{ fontSize: "14px" }}
          className="d-flex align-items-center justify-content-between"
        >
          <span>Total Item</span>
          <span style={{ fontWeight: "normal" }}>{mergeProduct?.length}</span>
        </p>
        <p
          style={{ fontSize: "14px" }}
          className="d-flex align-items-center justify-content-between"
        >
          <span>Item Price</span>
          <span style={{ fontWeight: "normal" }}>
          {console.log(mergeProduct,"merge product")}
            {mergeProduct?.reduce(
              (pre, next) =>
                +pre + (+next?.purchase_quantity * +next?.purchase_price || 0),
              0
            )}
          </span>
        </p>
        <p
          style={{ fontSize: "14px" }}
          className="d-flex align-items-center justify-content-between"
        >
          <span>Total Discount</span>
          <span style={{ fontWeight: "normal" }}>
            {mergeProduct?.reduce(
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
          Save
        </JsButton>
      </div>
    </form>
  );
};

export default SalesDeliveryForm;
