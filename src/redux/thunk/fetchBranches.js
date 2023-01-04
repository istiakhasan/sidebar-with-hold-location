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
console.log(selectedBranchFromLs)
const fetchBranches = (email) => {
  return async (dispatch, getState) => {
    const res = await fetch(
      `http://localhost:8080/api/v1/branch?email=${email}`
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
