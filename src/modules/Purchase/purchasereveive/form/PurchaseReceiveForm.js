import moment from "moment";
import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import HookFormInput from "../../../../common/HookFormInput";
import JsButton from "../../../../common/JsButton";
import JsFormInput from "../../../../common/JsFormInput";
import { getPurchaseOrderReveiveLanding } from "../utils/purchasereceiveutils";
const PurchaseReceiveForm = ({
  saveRef,
  // rowDto,
  // setRowDto,
  user,
  selectedBranch,
  setGridData,
  currentRowId,
}) => {
  const [rowDto, setRowDto] = useState({});
  const getPurchaseReciveById = () => {
    fetch(
      `http://localhost:8080/api/v1/purchase/purchasereceive/${currentRowId}?email=${user?.email}&branchId=${selectedBranch?.value}&status=receive`
    )
      .then((res) => res.json())
      .then((data) => setRowDto(data?.data));
  };
  useEffect(() => {
    getPurchaseReciveById();
  }, [currentRowId]);
  console.log(currentRowId, "check");
  const handleModifyPropertyy = (i, value, setter, obj, property) => {
    const _data = { ...obj };
    _data.product[i][property] = value;
    setter(_data);
  };
  const { handleSubmit } = useForm();
  const onSubmit = (data) => {
    const filterRowDto = rowDto?.product
      ?.filter((v) => v.purchase_quantity > 0)
      .map((d) => {
        d.baseId = rowDto._id;
        return d;
      });

    fetch("http://localhost:8080/api/v1/stock", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(filterRowDto),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Success") {
          getPurchaseReciveById();
        }
      });
  };
  return (
    <form className="d-flex" onSubmit={handleSubmit(onSubmit)}>
      <div className="table-responsive flex-grow-1">
        <table className="w-100">
          <thead>
            <tr>
              <th>Sl</th>
              <th>Item Name</th>
              <th>Date</th>
              <th className="text-center">Receive qty</th>
              <th className="text-center">WareHouse</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Net Price</th>
            </tr>
          </thead>
          <tbody>
            {rowDto?.product?.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item?.itemName}</td>
                <td>{moment(item?.createdAt).format("YYYY-MM-DD")}</td>
                <td className="text-center">
                  <HookFormInput>
                    <input
                      value={item?.purchase_quantity || ""}
                      onChange={(e) => {
                        const inputValue = e.target.value;
                        if (+inputValue > +item?.quantity) {
                          return toast.error(
                            "Receive quantity can't be greater than wirehouse quantity "
                          );
                        }
                        handleModifyPropertyy(
                          i,
                          inputValue,
                          setRowDto,
                          rowDto,
                          "purchase_quantity"
                        );
                      }}
                      className="js-form-input w-50 mx-auto mb-0"
                      type="text"
                    />
                  </HookFormInput>
                </td>
                <td className="text-center">{item?.quantity}</td>
                <td>{item?.quantity}</td>
                <td>{item?.purchasePrice}</td>
                <td>{item?.discount}</td>
                <td>{item?.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ width: "400px" }} className="ms-3">
        <div
          style={{ borderLeft: ".1px solid #C0C0C0 ", borderLeftWidth: ".2px" }}
          className=" pe-5 ps-3"
        >
          <span>Purchase Checkout</span>
          <JsFormInput
            type="date"
            readOnly
            value={moment().format("YYYY-MM-DD")}
            label="Date"
          />
          <p
            style={{ fontSize: "14px" }}
            className="d-flex align-items-center justify-content-between"
          >
            <span>Net Total</span>
            <span style={{ fontWeight: "normal" }}>
              {rowDto?.totalPrice}(tk)
            </span>
          </p>
          <p
            style={{ fontSize: "14px" }}
            className="d-flex align-items-center justify-content-between"
          >
            <span>Item Price</span>
            <span style={{ fontWeight: "normal" }}>
              {rowDto?.product?.reduce(
                (pre, next) => +pre + (+next?.purchasePrice || 0),
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
              {rowDto?.product?.reduce(
                (pre, next) => +pre + (+next?.discountInTk || 0),
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
            <span style={{ fontWeight: "normal" }}>00.00(tk)</span>
          </p>
          <p
            style={{ fontSize: "14px" }}
            className="d-flex align-items-center justify-content-between"
          >
            <span> Purchase Total</span>
            <span style={{ fontWeight: "normal" }}>
              {rowDto?.product?.reduce(
                (pre, next) =>
                  +pre + (+next?.purchasePrice * next?.quantity || 0),
                0
              )}
              (tk)
            </span>
          </p>
          <p
            style={{ fontSize: "14px" }}
            className="d-flex align-items-center justify-content-between"
          >
            <span>Advance Cash </span>
            <span style={{ fontWeight: "normal" }}>$00.00</span>
          </p>
          <JsButton type="submit" sx={{ width: "100%" }}>
            Receive
          </JsButton>
        </div>
      </div>
    </form>
  );
};

export default PurchaseReceiveForm;
