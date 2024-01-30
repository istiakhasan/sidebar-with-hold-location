import { baseUrs } from "../../helpers/config/config.Env";
import actionType from "../actionTypes/actionTypes";
const getFromLs = () => {

  const getData = localStorage.getItem("selectedBranch");
  if (getData) {
    return JSON.parse(getData);
  } else {
    return {}
  }

};
const selectedBranchFromLs = getFromLs();
const fetchBranches = (email) => {
  return async (dispatch, getState) => {
    const res = await fetch(
      `${baseUrs()}/branch?email=${email}`
    );
    const data = await res.json();
    dispatch({ type: actionType.LOAD_BRANCH, payload: data?.data });
    if (data?.data?.length) {
      if(Object.keys(selectedBranchFromLs).length>0){
        dispatch({ type: actionType.SELECT_BRANCH, payload: selectedBranchFromLs });
      }else{

        dispatch({ type: actionType.SELECT_BRANCH, payload: data?.data[0] });
      }

    }else{
      dispatch({ type: actionType.SELECT_BRANCH, payload: {} });
    }
  };
};
export default fetchBranches;
