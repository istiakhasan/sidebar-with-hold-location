import { baseUrs } from "../../../../helpers/config/config.Env";

export const getPurchaseOrderReveiveLanding = (email,branchId,setter) => {
    fetch(
      `${baseUrs()}/purchase/purchasereceive/?email=${email}&branchId=${branchId}&status=receive`
    )
      .then((res) => res.json())
      .then((data) => setter(data?.data));
  };