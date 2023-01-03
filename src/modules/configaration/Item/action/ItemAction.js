import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";


export const createItem = async (data,selectedBranch,email, cb) => {
    const payload={...data,branch:selectedBranch,userEmail:email}
  try {
    const res = await axios.post(
      `http://localhost:8080/api/v1/product`,
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
