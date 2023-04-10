import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import auth from "../../../firebase.config/firebase.config";
import OfficeCreateForm from "./form/OfficeCreateForm";
import OfficeLanding from "./landing/OfficeLanding";

const OfficeTabs = () => {
  document.title = "Office";
  const [user] = useAuthState(auth);
  const { selectedBranch } = useSelector((state) => state?.authReducer);
  const {
    isLoading,
    error,
    data,
    refetch
  } = useQuery(["officelanding", selectedBranch?.value], async () => {
    const data =await fetch(
      `http://localhost:8080/api/v1/office/?email=${user?.email}&branchId=${
        selectedBranch?.value || 0
      }`
    );

    return data.json();
  });
  return (
    <div style={{ position: "relative" }}>
      <Tabs className="mb-3" defaultActiveKey="Office">
        <Tab title="Office List" eventKey={"Office"}>
          <OfficeLanding data={data}/>
        </Tab>
        <Tab title="Create Office" eventKey={"craete_osadfffice"}>
          <OfficeCreateForm refetch={refetch} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default OfficeTabs;
