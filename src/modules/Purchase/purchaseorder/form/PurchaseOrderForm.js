import { useFormik } from "formik";
import React, { useState } from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import customStyles from "../../../../common/customStyles";
import auth from "../../../../firebase.config/firebase.config";
const PurchaseOrderForm = () => {
  const [user, loading] = useAuthState(auth);
  const [supplierList, setSupplierList] = useState([]);
  const [itemList, setItemList] = useState([]);
  const { selectedBranch } = useSelector((state) => state.authReducer);
  const formikProps = useFormik({
    initialValues: {},
  });

  const filterColors = (inputValue) => {
    return itemList.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };
  const loadOptions = (inputValue, cb) => {
    if (inputValue?.length < 3) return [];
    setTimeout(() => {
      cb(filterColors(inputValue));
    }, 1000);
  };

  useEffect(() => {
    fetch(
      `http://localhost:8080/api/v1/partner/partnerType/1?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setSupplierList(data?.data));
  }, []);

  useEffect(() => {
    fetch(
      `http://localhost:8080/api/v1/product/?email=${user?.email}&branchId=${selectedBranch?.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        const _itemList=data?.data?.map(item=>{
            return {
                label:item.itemName,
                value:item.itemCode
            }
        })
        setItemList(_itemList)
      });
  }, [selectedBranch, user?.email]);
  console.log(itemList, "supplier list ");
  return (
    <form>
      <div className="row  m-0 p-0 py-4">
        <div className="col-md-8 row component-background-color m-0 p-0 py-4">
          <div className="col-md-6">
            <label style={{ fontSize: "13px" }}>Supplier</label>
            <Select
              value={formikProps.values?.supplier}
              options={supplierList}
              onChange={(valueOption) => {
                formikProps.setFieldValue("supplier", valueOption);
              }}
              name="supplier"
              styles={customStyles}
            />
          </div>

          <div className="col-md-6">
            <label style={{ fontSize: "13px" }}>Item</label>

            {/* <AsyncSelect
              cacheOptions
              styles={customStyles}
              onChange={(valueOption) =>
                formikProps.setFieldValue("item", valueOption)
              }
              value={formikProps.values.item}
              loadOptions={loadOptions}
              defaultOptions
            /> */}
            <AsyncSelect
              cacheOptions
              styles={customStyles}
              onChange={(valueOption) =>
                formikProps.setFieldValue("item", valueOption)
              }
              value={formikProps.values.item}
              loadOptions={loadOptions}
              defaultOptions
            />
          </div>
        </div>
        <div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </form>
  );
};

export default PurchaseOrderForm;
