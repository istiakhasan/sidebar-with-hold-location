import axios from "axios";
import { toast } from "react-toastify";

export const createPartner = async (values,userEmail, cb) => {
  const payload = {
    name: values.name,
    mobile: values.mobile,
    address: values.address,
    companyName: values.companyName,
    email: values.email,
    partnerType: values.partnerType,
    accountOwnerEmail:userEmail

  };
console.log(payload,"payload")
  try {
    const res = await axios.post(
      // `https://mclone.onrender.com/api/v1/partner`,
      `http://localhost:8080/api/v1/partner`,
      payload
    );
    if (res?.data?.status === true) {
      cb();
    }
    console.log(res);
  } catch (error) {
    
    toast.error(error.message);
  }
};
export const updatePartner = async (values, id,setLoading, cb) => {
  const payload = {
    name: values.name,
    mobile: values.mobile,
    address: values.address,
    companyName: values.companyName,
    email: values.email,
    partnerType: values.partnerType,
  };

  try {
    const res = await axios.patch(
      `https://mclone.onrender.com/api/v1/partner/${id}`,
      payload
    );
    if (res?.data?.status === true) {
    
      cb();
    }
  } catch (error) {
    setLoading(false)
    toast.error(error.message);
  }
};
export const getPartner = async (setter) => {
  try {
    const res = await axios.get(`https://mclone.onrender.com/api/v1/partner`);
    if (res?.status === 200) {
      setter && setter(res?.data?.data);
    }
  } catch (error) {
    console.log(error);
  }
};
