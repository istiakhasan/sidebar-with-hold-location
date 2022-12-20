import axios from "axios";

export const createPartner = async (values, cb) => {
  const payload = {
    name: values.name,
    mobile: values.phone,
    address: values.address,
    companyName: values.companyName,
    email: values.email,
    partnerType: values.partnerType,
  };

  try {
    const res = await axios.post(
      `http://localhost:8080/api/v1/partner`,
      payload
    );
    if (res?.data?.status === true) {
      cb();
      console.log("got it ");
    }
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
export const getPartner = async (setter) => {
  try {
    const res = await axios.get(`http://localhost:8080/api/v1/partner`);
    if(res?.status===200){
      
       setter &&  setter(res?.data?.data)
    }


  } catch (error) {
    console.log(error);
  }
};
