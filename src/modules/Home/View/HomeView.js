import { Button } from "@mui/material";
import React, { useRef } from "react";
import MainLayout from "../../../common/MainLayout";

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
    <div className="">
      <div className="global-wrappar-shadow">
        <Button onClick={() => signInWithGoogle()} variant="contained">
          G+
        </Button>
        {loading2 ? (
          <Loading />
        ) : (
          <>
            {" "}
            {user2 ? (
              <Button onClick={() => signOut(auth)} variant="contained">
                logout
              </Button>
            ) : (
              <Button variant="contained">login</Button>
            )}
          </>
        )}

        <div className="d-none">
          
          <Formik
            initialValues={{ field1: "", field2: "", field3: "" }}
            innerRef={formRef}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              setFieldValue,
            }) => (
              <form onSubmit={handleSubmit}>
                <input
                  type="number"
                  name="field1"
                  onChange={(e) => {
                    setFieldValue("field1", e.target.value);

                    calculateTotal({ ...values, field1: e.target.value });
                  }}
                  value={values.field1}
                />
                {errors.email && touched.email && errors.email}
                <input
                  type="number"
                  name="field2"
                  onChange={(e) => {
                    setFieldValue("field2", e.target.value);

                    calculateTotal({ ...values, field2: e.target.value });
                  }}
                  value={values.field2}
                />

                <input
                  type="number"
                  name="field3"
                  onChange={(e) => {
                    setFieldValue("field3", e.target.value);
                    calculateAverage({ ...values, field3: e.target.value });
                  }}
                  value={values.field3}
                />
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
