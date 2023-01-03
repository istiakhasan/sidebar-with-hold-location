import actionType from "../actionTypes/actionTypes";

const fetchBranches = (email) => {
    return async (dispatch, getState) => {
      const res = await fetch(`http://localhost:8080/api/v1/branch?email=${email}`);
      const data = await res.json();
      if (data?.data?.length) {
        dispatch({ type: actionType.LOAD_BRANCH, payload: data?.data });
        
      }
    };
  };
  export default fetchBranches;