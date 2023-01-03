import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../../firebase.config/firebase.config";
import { createPartner, updatePartner } from "../../controllers";

const usePartner = (refetch, setShow, currentRowId) => {
  const [singleData, setSingleData] = useState({});
  const [loading, setLoading] = useState(false);
  const [user]=useAuthState(auth)
  const formikProps = useFormik({
    initialValues: singleData ? singleData : { name: "", phone: "" },
    enableReinitialize: true,
    onSubmit: (values) => {
      setLoading(true);
      if (currentRowId) {
        updatePartner(values, currentRowId,setLoading, () => {
          refetch();
          toast.success("Partner updated successfully...");
          setShow(false);
          setLoading(false);
        });
      } else {
        createPartner(values,user?.email, () => {
          refetch();
          setShow(false);
          setLoading(false);
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
      const res = await axios.get(
        `https://mclone.onrender.com/api/v1/partner/${id}`
      );
      if (res?.status === 200) {
        // toast.success("Successfully Deleted", { toastId: "deleteDue" });

        setSingleData(res?.data?.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return {
    handleDeletePartner,
    formikProps,
    loading,
    partnerGetById,
    singleData,
  };
};

export default usePartner;
