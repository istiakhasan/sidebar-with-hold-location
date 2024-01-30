import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.config/firebase.config";
import { useSelector } from "react-redux";
import Loading from "../../../../common/loding";
import MuiCommonIcon from "../../../../common/MuiCommonIcon";
import CommonConfirmAlert from "../../../../common/ConfirmAlert";
import { useQuery } from "@tanstack/react-query";
import { baseUrs } from "../../../../helpers/config/config.Env";

const SalesApproveLanding = () => {
  // const [landingData, setLandingData] = useState([]);
  const { selectedBranch } = useSelector((state) => state?.authReducer);
  const [user, loading] = useAuthState(auth);

  const {
    data: landingData,
    isLoading,
    refetch,
  } = useQuery(["allsales", selectedBranch?.value], async () => {
    const res = await fetch(
      `${baseUrs()}/sales?email=${user.email}&branchId=${selectedBranch?.value}`
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
                               background: "goldenrod",
                              //  color: "goldenrod",
                               color: "white",
                               padding: "2px 5px",
                               borderRadius: "4px",
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
