import axios from "axios";
import { toast } from "react-toastify";

export const getItemList = (user, selectedBranch, setItemList) => {
  fetch(
    `http://localhost:8080/api/v1/product/?email=${user?.email}&branchId=${selectedBranch?.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      const _itemList = data?.data?.map((item) => {
        return {
          ...item,
          label: item.itemName,
          value: item.itemCode,
        };
      });
      setItemList(_itemList);
    });
};

export const getSupplierList = (user, setSupplierList) => {
  fetch(
    `http://localhost:8080/api/v1/partner/partnerType/1?email=${user.email}`
  )
    .then((res) => res.json())
    .then((data) => setSupplierList(data?.data));
};

export const handleRowDto = (value, rowDto, setRowDto) => {
    console.log(value,"value");
  const isAlreadyExist = rowDto?.find(
    (itm) => itm?.value === value?.item?.value
  );
  const isSupplier = rowDto?.some(
    (dt) => dt?.supplierId=== value?.supplier?.value
  );

  if (!isSupplier && rowDto?.length > 0) {
    return toast.error("Please select one supplier at a time ");
  }

  if (isAlreadyExist) {
    return alert("exist");
  }
  setRowDto([...rowDto, {...value?.item,supplierId:value?.supplier?.value}]);
};

export const calculateTotal = (value, index, price, quantity, data, setter) => {
  console.log(value, index, price, quantity, data);
  const priceWithOutDiscount = price * quantity;
  const discount = (value * priceWithOutDiscount) / 100;
  const totalPrice = priceWithOutDiscount - discount;
  const _data = [...data];
  _data[index].discountInTk = discount;
  _data[index].discount = value;
  _data[index].quantity = quantity;
  _data[index].total = totalPrice;
  setter(_data);
};

export const handleSaveData = async (
  rowDto,
  totalPrice,
  accountId,
  branchId,
  values,
  cb
) => {
 
  try {
    const res = await axios.post(`http://localhost:8080/api/v1/purchase`, {
      product: rowDto,
      accountId,
      branchId,
      totalPrice,
      supplier:values.supplier
    });
    if (res?.data?.status === true) {
      cb(res?.data);
    }
  } catch (error) {
    toast.error(error.message);
  }
};


export const getPurchaseOrderLanding = (email,selectedBranch,setter) => {
  fetch(
    `http://localhost:8080/api/v1/purchase?email=${email}&branchId=${selectedBranch}&status=pending`
  )
    .then((res) => res.json())
    .then((data) => setter(data?.data));
};