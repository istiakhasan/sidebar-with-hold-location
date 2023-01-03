import axios from "axios";
import { toast } from "react-toastify";

export const createOffice = async (values,userEmail, cb) => {
    const payload = {
      label: values.officeName,
      businessUnitValue:values?.businessUnit?.value,
      accountOwnerEmail:userEmail,
      address: values.address,
      phone: values.phone,
      officeEmail: values.officeEmail,
      distric:values.distric,
      branch:values?.businessUnit
  
    };
  console.log(payload,"payload")
    try {
      const res = await axios.post(
     
        `http://localhost:8080/api/v1/office`,
        payload
      );
      if (res?.data?.status === true) {
        cb(res?.data);
      }
      console.log(res);
    } catch (error) {
      
      toast.error(error.message);
    }
  };