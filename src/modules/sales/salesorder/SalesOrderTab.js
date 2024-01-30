import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import SalesOrderForm from "./form/SalesOrderForm";
import SalesOrderLanding from "./table/SalesOrderLanding";
import { useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.config/firebase.config";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../common/loding";
import { baseUrs } from "../../../helpers/config/config.Env";

const SalesOrderTab = () => {
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
  return (
    <div style={{ position: "relative" }}>
      <Tabs className="mb-3" defaultActiveKey="sales_order_list">
        <Tab title="Sales Order List" eventKey={"sales_order_list"}>
          <SalesOrderLanding
            landingData={landingData}
            refetch={refetch}
            user={user}
            selectedBranch={selectedBranch}
          />
        </Tab>
        <Tab title="Sales Order" eventKey={"sales_order"}>
          <SalesOrderForm
            refetch={refetch}
            user={user}
            selectedBranch={selectedBranch}
          />
        </Tab>
      </Tabs>
    </div>
  );
};

export default SalesOrderTab;
