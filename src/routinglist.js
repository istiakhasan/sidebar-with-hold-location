import React from "react";
import ItemTab from "./modules/configaration/Item/ItemTab";
import OfficeTabs from "./modules/configaration/office/OfficeTabs";
import PartnerTabs from "./modules/configaration/partner/PartnerTabs";
import PurchaseOrderTabs from "./modules/Purchase/purchaseorder/PurchaseOrderTabs";
import PurchasePayment from "./modules/Purchase/purchasePayment/view/PurchasePayment";
import PurchaseReport from "./modules/Purchase/purchasereport/view/PurchaseReport";
import PurchaseReturn from "./modules/Purchase/purchasereturn/view/PurchaseReturn";

import PurchaseReveive from "./modules/Purchase/purchasereveive/view";
import PurchaseRequestTabs from "./modules/Purchase/request/PurchaseRequestTabs";
import CustomCalnder from "./modules/sales/CustomCalandar/CustomCalnder";
import FormikYup from "./modules/sales/FormikYup/FormikYup";
import SalesQuotation from "./modules/sales/salesquotaion/view/SalesQuotation";

const PurchaseRequest = React.lazy(() =>
  import("./modules/Purchase/request/view/PurchaseRequest")
);

const HomeView = React.lazy(() => import("./modules/Home/View/HomeView"));
// const PurchasePayment = React.lazy(() =>
//   import("./modules/Purchase/purchasePayment/view/PurchasePayment")
// );

export const routingList = [
  {
    id: 1,
    path: "/purchase/request",
    component: <PurchaseRequestTabs />,
  },
  {
    id: 2,
    path: "/",
    component: <HomeView />,
  },
  {
    id: 3,
    path: "/purchase/order",
    component: <PurchaseOrderTabs />,
  },
  {
    id: 4,
    path: "/purchase/purchasereveive",
    component: <PurchaseReveive />,
  },
  {
    id: 5,
    path: "/purchase/purchasepayment",
    component: <PurchasePayment />,
  },
  {
    id: 5,
    path: "/purchase/purchasereturn",
    component: <PurchaseReturn />,
  },
  {
    id: 6,
    path: "/purchase/purchaseReport",
    component: <PurchaseReport />,
  },
  {
    id: 7,
    path: "/sales/salesquotaion",
    component: <SalesQuotation />,
  },
  {
    id: 7,
    path: "/sales/formikyup",
    component: <FormikYup />,
  },
  {
    id: 8,
    path: "/sales/calander",
    component: <CustomCalnder />,
  },
  {
    id: 8,
    path: "/configaration/partner",
    component: <PartnerTabs />,
  },
  {
    id: 8,
    path: "/configaration/item",
    component: <ItemTab />,
  },
  {
    id: 8,
    path: "/configaration/office",
    component: <OfficeTabs />,
  },
];
