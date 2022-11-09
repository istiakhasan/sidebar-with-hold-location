import React from "react";
import MainLayout from "./common/MainLayout";
import PurchasePayment from "./modules/Purchase/purchasePayment/view/PurchasePayment";
import PurchaseReturn from "./modules/Purchase/purchasereturn/view/PurchaseReturn";

import PurchaseReveive from "./modules/Purchase/purchasereveive/view";

const PurchaseRequest = React.lazy(() =>
  import("./modules/Purchase/request/view/PurchaseRequest")
);
const PurchaseOrder = React.lazy(() =>
  import("./modules/Purchase/purchaseorder/view/PurchaseOrder")
);
const HomeView = React.lazy(() => import("./modules/Home/View/HomeView"));
// const PurchasePayment = React.lazy(() =>
//   import("./modules/Purchase/purchasePayment/view/PurchasePayment")
// );

export const routingList = [
  {
    id: 1,
    path: "/purchase/request",
    component: <PurchaseRequest />,
  },
  {
    id: 2,
    path: "/",
    component: <HomeView />,
  },
  {
    id: 3,
    path: "/purchase/order",
    component: <PurchaseOrder />,
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
];
