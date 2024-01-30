import axios from "axios";
import { toast } from "react-toastify";
import { baseUrs } from "../../../../helpers/config/config.Env";


export const createItem = async (data,selectedBranch,email, cb) => {
    const payload={...data,branch:selectedBranch,userEmail:email}
  try {
    const res = await axios.post(
      `${baseUrs()}/product`,
      payload
    );
    if (res?.data?.status === true) {
      cb(res?.data);
    }
  } catch (error) {
    toast.error(error.message);
  }
};
