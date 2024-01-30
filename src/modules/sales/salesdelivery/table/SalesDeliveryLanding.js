import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.config/firebase.config";
import { useSelector } from "react-redux";
import Loading from "../../../../common/loding";
import MuiCommonIcon from "../../../../common/MuiCommonIcon";

import CommonConfirmAlert from "../../../../common/ConfirmAlert";
import { useQuery } from "@tanstack/react-query";
import JsButton from "../../../../common/JsButton";
import CustomModal from "../../../../common/CustomModal";
import { useState } from "react";
import SalesDeliveryForm from "../form/SalesDeliveryForm";
import { baseUrs } from "../../../../helpers/config/config.Env";

const SalesDeliveryLanding = () => {
  const { selectedBranch } = useSelector((state) => state?.authReducer);
  const [user, loading] = useAuthState(auth);
  const [show,setShow]=useState(false)
  const [deliveryItem,setDeliveryItem]=useState({})
  const {
    data: landingData,
    isLoading,
    refetch,
  } = useQuery(["allsales", selectedBranch?.value], async () => {
    const res = await fetch(
      `${baseUrs()}/sales?email=${user.email}&branchId=${selectedBranch?.value}&status=approved`
    );

    return res.json();
  });
  if (isLoading) {
    return;
  }
  if (loading) {
    return <Loading />;
  }
  const approveSalesOrder = (id) => {
    axios
      .patch(
        `${baseUrs()}/sales/salesapprove/${id}?email=${user.email}&branchId=${selectedBranch?.value}&status=pending`
      )
      .then((res) => refetch());
  };

  return (
    <div className="table-responsive">
      <table>
        <thead>
          <tr>
            <th>SL</th>
            <th>Customer</th>
            <th>Item</th>
            <th className="text-center">Price</th>
            <th className="text-center">Quantity</th>
            <th className="text-center">Status</th>
            <th className="text-center">Sub Total</th>
            <th className="text-end pe-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {landingData?.data?.map((v, i) => {

            return v.products?.map((itm, j) => {
              return (
                <>
                  <tr key={j}>
                    {j === 0 && (
                      <>
                        <td rowSpan={v?.products?.length}>{i + 1}</td>
                      </>
                    )}

                    {j === 0 && (
                      <>
                        <td rowSpan={v?.products?.length}>
                          {v?.customer?.label}
                        </td>
                      </>
                    )}
                    <td>{itm?.item?.label}</td>
                    <td className="text-center">{itm?.purchase_price}</td>
                    <td className="text-center">{itm?.purchase_quantity}</td>

                    {j === 0 && (
                      <>
                        <td
                          className="text-center"
                          rowSpan={v?.products?.length}
                        >
                          {" "}
                          {v?.status?.toLowerCase() === "approved" ? (
                            <span
                              style={{
                                color: "green",
                                fontWeight: "bold",
                                fontSize: "11px",
                              }}
                            >
                              {v?.status}
                            </span>
                          ) : (
                            <span
                              style={{
                                color: "goldenrod",
                                fontWeight: "bold",
                                fontSize: "11px",
                              }}
                              onClick={() => {
                                CommonConfirmAlert(
                                  () => approveSalesOrder(v?._id),
                                  "Confirm to submit !",
                                  "Are you sure to approve this order ?"
                                );
                              }}
                            >
                              {v?.status}
                            </span>
                          )}
                        </td>
                      </>
                    )}
                    <td className="text-center">
                      {itm?.purchase_price * itm?.purchase_quantity}
                    </td>
                    {j === 0 && (
                      <>
                        <td className="text-end" rowSpan={v?.products?.length}>
                          <span onClick={()=>{
                            setDeliveryItem(v)
                            setShow(true)}}>
                            <JsButton>Delivery</JsButton>
                          </span>
                        </td>
                      </>
                    )}
                  </tr>
                </>
              );
            });
          })}
        </tbody>
      </table>

      {show && (
        <CustomModal
          setShow={setShow}
          title={"Sales delivery "}
          show={show}

          isView={true}
        >
          {/* <PurchaseReceiveForm
            user={user}
            currentRowId={currentRowId}
            setGridData={setGridData}
            selectedBranch={selectedBranch}
            rowDto={rowDto}
            setRowDto={setRowDto}
            saveRef={saveRef}
          /> */}

          <SalesDeliveryForm deliveryItem={deliveryItem} />

        </CustomModal>
      )}
    </div>
  );
};

export default SalesDeliveryLanding;
