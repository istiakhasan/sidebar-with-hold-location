import React from "react";

const PurchaseRequest = React.lazy(() => import('./modules/Purchase/request/view/PurchaseRequest'));
const PurchaseOrder = React.lazy(() => import('./modules/Purchase/purchaseorder/view/PurchaseOrder'));
const HomeView = React.lazy(() => import('./modules/Home/View/HomeView'));



export const routingList=[
    {
    id:1,
    path:"/purchase/request",
    component:<PurchaseRequest />
    },
    {
    id:2,
    path:"/",
    component:<HomeView />
    },
    {
    id:2,
    path:"/purchase/order",
    component:<PurchaseOrder />
    },
]