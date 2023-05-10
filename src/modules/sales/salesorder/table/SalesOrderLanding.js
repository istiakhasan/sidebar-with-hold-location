import React from "react";
import MuiCommonIcon from "../../../../common/MuiCommonIcon";
import axios from "axios";
import { toast } from "react-toastify";
import CommonConfirmAlert from "../../../../common/ConfirmAlert";
const SalesOrderLanding = ({ landingData, selectedBranch, user, refetch }) => {
  const handleDeleteSalesOrder = (id, status) => {
    const url = `http://localhost:8080/api/v1/sales/salesapprove/${id}?email=${user?.email}&branchId=${selectedBranch?.value}&status=${status}`;
    axios.delete(url).then((res) => {
      if (res?.data?.data?.deletedCount === 1) {
        toast.success("Delete order successfully.");
        refetch();
      }
    });
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
            console.log(landingData, "landing data");
            return v.products?.map((itm, j) => {
              return (
                <>
                  <tr>
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
                                // background: "green",
                                // color: "white",
                                padding: "2px 5px",
                                borderRadius: "4px",
                                fontSize: "11px",
                                cursor: "not-allowed",
                              }}
                            >
                              {v?.status}
                            </span>
                          ) : (
                            <span
                              style={{
                                // background: "goldenrod",
                                color: "goldenrod",
                                // color: "white",
                                padding: "2px 5px",
                                borderRadius: "4px",
                                fontSize: "11px",
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
                        <td className="text-end " rowSpan={v?.products?.length}>
                          <p className="pe-2">
                            {v?.status?.toLowerCase() === "approved" ? (
                              "--"
                            ) : (
                              <span
                                onClick={() =>
                                  CommonConfirmAlert(
                                    () =>
                                      handleDeleteSalesOrder(v?._id, v?.status),
                                    "Confirm to submit !",
                                    "Are you sure to delete this order ?"
                                  )
                                }
                              >
                                <MuiCommonIcon name={"delete"} color={"red"} />
                              </span>
                            )}
                          </p>
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
    </div>
  );
};

export default SalesOrderLanding;
