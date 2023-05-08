import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.config/firebase.config";
import { useSelector } from "react-redux";
import Loading from "../../../../common/loding";
import MuiCommonIcon from "../../../../common/MuiCommonIcon";

const SalesApproveLanding = () => {
  const [landingData, setLandingData] = useState([]);
  const { selectedBranch } = useSelector((state) => state?.authReducer);
  const [user, loading] = useAuthState(auth);
  console.log(selectedBranch?.value, "branch");
  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/api/v1/sales/?email=${user.email}&branchId=${selectedBranch?.value}`
      )
      .then((res) => setLandingData(res?.data?.data));
  }, [user.email, selectedBranch]);

  if (loading) {
    return <Loading />;
  }
  const approveSalesOrder=(id)=>{
    axios
    .patch(
      `http://localhost:8080/api/v1/sales/salesapprove/${id}?email=${user.email}&branchId=${selectedBranch?.value}&status=pending`
    )
    .then((res) => console.log(res?.data?.data));
  }
  console.log(landingData,"landing");
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
          {landingData?.map((v, i) => {
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
                              onClick={()=>{
                                approveSalesOrder(v?._id)
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
                          <MuiCommonIcon name={"delete"} color={"red"} />
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

export default SalesApproveLanding;
