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
const SalesOrderForm = () => {
  const [itemList, setItemList] = useState([]);
  const [customerList, setCustomerList] = useState([]);
  const [rowDto, setRowDto] = useState([]);
  const [user, loading] = useAuthState(auth);
  const { selectedBranch } = useSelector((state) => state?.authReducer);
  // load all available products
  const loadAllAvailAbleProducts = async (setter) => {
    console.log("check ....");
    const res = await axios.get(`http://localhost:8080/api/v1/stock?branchId=${selectedBranch?.value || ""}`);
    const modifyData = res?.data?.map(
      ({ itemName, itemCode, quantity, ...rest }, i) => {
        console.log(rest, "rest");
        return {
          label: itemName,
          value: itemCode,
          stock: quantity,
        };
      }
    );
    setter(modifyData);
  };
  const loadAllAvailAbleCustomer = async (setter) => {
    const res = await axios.get(
      "http://localhost:8080/api/v1/partner/partnerType/2?email=kashem@gmail.com"
    );
    setter(res?.data?.data);
  };
  useEffect(() => {
    loadAllAvailAbleProducts(setItemList);
    loadAllAvailAbleCustomer(setCustomerList);
  }, [selectedBranch]);

  const { values, handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      item: "",
      customer: "",
    },
    onSubmit: (value) => {
      const payload = rowDto.map(({ customer, ...rest }) => {
        return {
          ...rest
        };
      });
      axios
        .post("http://localhost:8080/api/v1/sales", {
          products:payload,
          email: user.email,
          branchId: selectedBranch?.value,
          customer: values.customer,
        })
        .then((res) => console.log(res));
    },
  });

  if (loading) {
    return <Loading />;
  }

  const handleRowDto = (rowDto, valueOption, setter) => {
    const isItemExist = rowDto.find(
      (v) => v?.item?.value === valueOption.value
    );
    const isSupplierExist = rowDto.some(
      (sup) => sup?.customer?.value === values?.customer?.value
    );
    if (!isSupplierExist && rowDto?.length > 0) {
      return toast.error("Please select one supplier at a time  ");
    }

    if (!isItemExist) {
      setter([
        ...rowDto,
        {
          item: valueOption,
          customer: values.customer,
          availableQuantity: valueOption?.stock,
        },
      ]);
    } else {
      return toast.error("Item already exist");
    }
  };
  return (
    <form
      style={{ border: "1px solid #C0C0C0" }}
      className="row  m-0 p-0 py-3 rounded-2"
      onSubmit={handleSubmit}
    >
      <div className="col-md-8">
        <div className="row">
          <div className="col-md-3">
            <label style={{ fontSize: "13px" }}>Customer</label>

            <Select
              styles={customStyles}
              placeholder="Customer"
              options={customerList}
              onChange={(valueOption) => {
                setFieldValue("customer", valueOption);
              }}
            />
          </div>
          <div className="col-md-3">
            <label style={{ fontSize: "13px" }}>Item</label>
            <Select
              onChange={(valueOption) => {
                setFieldValue("item", valueOption);
                handleRowDto(rowDto, valueOption, setRowDto);
              }}
              styles={customStyles}
              placeholder="Item"
              options={itemList}
            />
          </div>

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
                    <th className="text-end pe-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {rowDto.map((v, i) => {
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
                                  +v?.availableQuantity === 0 ? "red" : "green"
                                }`,
                                fontWeight: "400",
                              }}
                            >
                              {NumberFormate(+v?.availableQuantity) || 0.0}
                            </span>
                          </p>
                        </td>
                        <td style={{ width: "140px" }}>
                          <JsFormInput
                            value={v.purchase_quantity}
                            onChange={(e) => {
                              let numberRegex = /^\d+$/;
                              if (e.target.value > v?.item?.stock) {
                                return toast.error(
                                  "Purchase quantity should not be geater then stock quantity.."
                                );
                              } else if (
                                !numberRegex.test(e.target.value) &&
                                e.target.value !== ""
                              ) {
                                console.log("log");
                                return toast.error(
                                  "Please enter a posetive number"
                                );
                              } else if (
                                +e.target.value === 0 &&
                                e.target.value !== ""
                              ) {
                                return toast.error("Number should not be zero");
                              }

                              const _data = [...rowDto];
                              _data[i]["purchase_quantity"] = e.target.value;
                              _data[i]["availableQuantity"] =
                                _data[i]["item"]["stock"] - +e.target.value;
                              setRowDto(_data);
                            }}
                            placeholder="qty"
                          />
                        </td>
                        <td style={{ width: "140px" }}>
                          <JsFormInput
                            value={v.purchase_price}
                            onChange={(e) => {
                              const _data = [...rowDto];
                              _data[i]["purchase_price"] = e.target.value;
                              setRowDto(_data);
                            }}
                            placeholder="price"
                          />
                        </td>

                        <td className="text-center">
                          {+v.purchase_price * +v.purchase_quantity || "--"}
                        </td>
                        <td className="text-end">
                          <span
                            style={{
                              display: "inline-block",
                              marginRight: "10px",
                            }}
                            onClick={() => {
                              const _data = [...rowDto];
                              _data.splice(i, 1);
                              setRowDto(_data);
                            }}
                          >
                            <MuiCommonIcon color={"red"} name={"delete"} />
                          </span>
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
          <span style={{ fontWeight: "normal" }}>{rowDto?.length}</span>
        </p>
        <p
          style={{ fontSize: "14px" }}
          className="d-flex align-items-center justify-content-between"
        >
          <span>Item Price</span>
          <span style={{ fontWeight: "normal" }}>
            {rowDto?.reduce(
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
          Save
        </JsButton>
      </div>
    </form>
  );
};

export default SalesOrderForm;
