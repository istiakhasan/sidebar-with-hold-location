import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import ItemCreateForm from "./form/ItemCreateForm";
import ItemLanding from "./landing/ItemLanding";

const ItemTab = () => {
  return (
    <div style={{ position: "relative" }}>
    <Tabs className="mb-3" defaultActiveKey="Office">
      <Tab title="Item List" eventKey={"Office"}>
        <ItemLanding />
      </Tab>
      <Tab title="Create Item" eventKey={"craete_osadfffice"}>
        <ItemCreateForm />
      </Tab>
    </Tabs>
  </div>
  );
};

export default ItemTab;
