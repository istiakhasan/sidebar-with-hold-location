import { useFormik } from "formik";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../../firebase.config/firebase.config";
import { createOffice } from "../api/office_api";

const useOffice = () => {
  const [user] = useAuthState(auth);
  const formikProps = useFormik({
     enableReinitialize:true,
    initialValues: {
      businessUnit:"",
      officeName: "",
      officeEmail: "",
      address: "",
      phone: "",
      district: "",
    },
    onSubmit: (values) => {
      createOffice(values, user?.email, (res) => {
        formikProps.resetForm()
        toast.success("Office created successfully...")
      });
    },
  });

  return { formikProps };
};

export default useOffice;
