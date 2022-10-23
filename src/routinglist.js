import HomeView from "./modules/Home/View/HomeView";
import PurchaseOrder from "./modules/Purchase/purchaseorder/view/PurchaseOrder";
import PurchaseRequest from "./modules/Purchase/request/view/PurchaseRequest";


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