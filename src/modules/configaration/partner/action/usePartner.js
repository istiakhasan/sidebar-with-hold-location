import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";
import { createPartner, updatePartner } from "../../controllers";

const usePartner = (refetch, setShow, currentRowId) => {
  const [singleData, setSingleData] = useState({});
  const formikProps = useFormik({
    initialValues: singleData ? singleData : { name: "", phone: "" },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(currentRowId, "row id current ");
      if (currentRowId) {
        updatePartner(values, currentRowId, () => {
          refetch();
          toast.success("Partner updated successfully...");
          setShow(false);
       
        });
      } else {
        createPartner(values, () => {
          setShow(false);
          refetch();
        });
      }
    },
  });

  const handleDeletePartner = async (id, cb) => {
    try {
      const res = await axios.delete(
        `https://mclone.onrender.com/api/v1/partner/${id}`
      );
      if (res?.status === 200) {
        toast.success("Successfully Deleted", { toastId: "deleteDue" });
        refetch();
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const partnerGetById = async (id, cb) => {
    try {
      const res = await axios.get(`https://mclone.onrender.com/api/v1/partner/${id}`);
      if (res?.status === 200) {
        // toast.success("Successfully Deleted", { toastId: "deleteDue" });
        console.log(res?.data?.data, "res.data");
        setSingleData(res?.data?.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return {
    handleDeletePartner,
    formikProps,

    partnerGetById,
    singleData,
  };
};

export default usePartner;
