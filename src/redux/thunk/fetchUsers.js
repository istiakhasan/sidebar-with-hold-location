const fetchUserDAta = () => {
  return async (dispatch, getState) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    if (data.length) {
      dispatch({ type: "PRODUCT_LOAD", payload: data });
    }
  };
};
export default fetchUserDAta;
