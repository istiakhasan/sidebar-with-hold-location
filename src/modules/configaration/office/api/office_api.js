import axios from "axios";
import { toast } from "react-toastify";
import { baseUrs } from "../../../../helpers/config/config.Env";

export const createOffice = async (values, userEmail, cb) => {
  const payload = {
    label: values.officeName,
    businessUnitValue: values?.businessUnit?.value,
    accountOwnerEmail: userEmail,
    address: values.address,
    phone: values.phone,
    officeEmail: values.officeEmail,
    distric: values.distric,
    branch: values?.businessUnit,
  };
  try {
    const res = await axios.post(
      `${baseUrs()}/office`,
      payload
    );
    if (res?.data?.status === true) {

      cb(res?.data);
    }

  } catch (error) {
    toast.error(error.message);
  }
};


