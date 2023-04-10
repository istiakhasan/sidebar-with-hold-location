export const getPurchaseOrderReveiveLanding = (email,branchId,setter) => {
    fetch(
      `http://localhost:8080/api/v1/purchase/purchasereceive/?email=${email}&branchId=${branchId}&status=receive`
    )
      .then((res) => res.json())
      .then((data) => setter(data?.data));
  };