import { Button } from "@mui/material";
import React, { useRef } from "react";

import { Formik } from "formik";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.config/firebase.config";
import { signOut } from "firebase/auth";
import Loading from "../../../common/loding";
const HomeView = () => {
  const formRef = useRef();

  const calculateTotal = (obj) => {
    const fieldValue = Object.values(obj);
    const slicedValue = fieldValue.slice(0, fieldValue.length - 1);

    let total = slicedValue.reduce((a, b) => Number(a) + Number(b), 0);
    formRef?.current?.setFieldValue("field3", total);
  };
  const calculateAverage = (v) => {
    const total = v.field3;
    delete v.field3;
    const average = +total / Object.keys(v).length;

    for (let item in v) {
      formRef?.current?.setFieldValue([item], average);
    }
  };
  const [signInWithGoogle, , loading, error] = useSignInWithGoogle(auth);
  const [user2, loading2] = useAuthState(auth);
  if (loading && error && loading2) {
    return;
  }

  return (
 
      <div className="global-wrappar-shadow">
       
      
      
      </div>
    
  );
};

export default HomeView;
