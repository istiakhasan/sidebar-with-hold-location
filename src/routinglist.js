import React from "react";
import ItemTab from "./modules/configaration/Item/ItemTab";
import OfficeTabs from "./modules/configaration/office/OfficeTabs";
import PartnerTabs from "./modules/configaration/partner/PartnerTabs";
import InventoryReportTabs from "./modules/Inventory/InventoryReport/InventoryReportTabs";
import PurchaseApproveTabs from "./modules/Purchase/purchaseapprove/PurchaseApproveTabs";
import PurchaseOrderTabs from "./modules/Purchase/purchaseorder/PurchaseOrderTabs";
import PurchasePayment from "./modules/Purchase/purchasePayment/view/PurchasePayment";
import PurchaseReport from "./modules/Purchase/purchasereport/view/PurchaseReport";
import PurchaseReturn from "./modules/Purchase/purchasereturn/view/PurchaseReturn";
import PurchaseReveive from "./modules/Purchase/purchasereveive/view";
import PurchaseRequestTabs from "./modules/Purchase/request/PurchaseRequestTabs";
import CustomCalnder from "./modules/sales/CustomCalandar/CustomCalnder";
import FormikYup from "./modules/sales/FormikYup/FormikYup";
import SalesQuotation from "./modules/sales/salesquotaion/view/SalesQuotation";
import SalesOrderTab from "./modules/sales/salesorder/SalesOrderTab";
import SalesApproveTabs from "./modules/sales/salesapprove/SalesApproveTabs";
import SalesDeliveryTabs from "./modules/sales/salesdelivery/SalesDeliveryTabs";


const HomeView = React.lazy(() => import("./modules/Home/View/HomeView"));
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
    id: 9,
    path: "/configaration/partner",
    component: <PartnerTabs />,
  },
  {
    id: 10,
    path: "/configaration/item",
    component: <ItemTab />,
  },
  {
    id: 11,
    path: "/configaration/office",
    component: <OfficeTabs />,
  },
  {
    id:12,
    path:"/purchase/approve",
    component:<PurchaseApproveTabs />
  },
  {
    id:13,
    path:"/inventory/inventoryreports",
    component:<InventoryReportTabs  />
  },
  {
    id:14,
    path:"/sales/salesorder",
    component:<SalesOrderTab  />
  },
  {
    id:15,
    path:"/sales/soapprove",
    component:<SalesApproveTabs />
  },
  {
    id:16,
    path:"/sales/salesdelivery",
    component:<SalesDeliveryTabs />
  },
];
