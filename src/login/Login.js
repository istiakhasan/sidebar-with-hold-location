import React, { useEffect, useState } from "react";
import loginimg from "../asset/images/login/login.jpg";
import JsButton from "../common/JsButton";
import Jsinput from "../common/Jsinput";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../firebase.config/firebase.config";
import { useNavigate } from "react-router-dom";
import Loading from "../common/loding";
import axios from "axios";
import { baseUrs } from "../helpers/config/config.Env";

let signUpValidation = yup.object().shape({
  name: yup.string().required("Name is required"),

  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
  mobileno: yup.string().required("Phone number is required"),
});
let loginValidation = yup.object().shape({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
});

const Login = () => {
  // all use state  start
  const [isSignUp, setIsSignUp] = useState(false);
  const [smallSize, setSmallSize] = useState(false);
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading] =
    useSignInWithEmailAndPassword(auth);
  const [
    createUserWithEmailAndPassword,
    ,
    signUploading,
    ,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating] = useUpdateProfile(auth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 750) {
        setSmallSize(true);
      } else {
        setSmallSize(false);
      }
    });
  }, []);
  const saveUserInfoToDb = async (email, name, phone) => {
    const res = await axios.post(`${baseUrs()}/user`, {
      email,
      name,
      phone,
    });
    console.log(res);

  };
  const { handleSubmit, handleChange, errors, touched } = useFormik({
    initialValues: { mobileno: "", password: "", name: "", email: "" },
    validationSchema: isSignUp ? signUpValidation : loginValidation,

    onSubmit: async (values) => {
      if (!isSignUp) {
        signInWithEmailAndPassword(values.email, values.password);
      } else {
        await createUserWithEmailAndPassword(values.email, values.password);
        const a = await updateProfile({
          displayName: values.name,
          phoneNumber: values.mobileno,
        });
        if (a) {
          saveUserInfoToDb(values.email, values.name, values.mobileno);
        }
      }
    },
  });
  // if (error || signUperror || updateerror) {
  //   return;
  // }
  if (loading || signUploading || updating) {
    return <Loading />;
  }
  if (user) {
    navigate("/");
  }

  return (
    <div className="min-vh-100 login-wraper  container-fluid p-0">
      <div
        style={{ position: "relative" }}
        className={`  component-background-color  p-0 m-0 vh-100 vw-100`}
      >
        <div
          style={{ width: "50%" }}
          className={` vh-100 p-0 right-side-container  ${
            !smallSize ? (isSignUp ? "left-side-reverse" : "left-side") : ""
          }`}
        >
          <img
            style={{ objectFit: "cover" }}
            className="img-fluid h-100 w-100"
            src={loginimg}
            alt=""
          />
        </div>
        <div
          style={{}}
          className={` vh-100     p-0  d-flex align-items-center justify-content-center ${
            smallSize
              ? "w-100"
              : isSignUp
              ? "right-side w-50"
              : "right-side-reverse w-50"
          } `}
        >
          <div
            style={{
              padding: " 40px",
              minHeight: "400px",
              height: "auto",
              width: "488px",
              alignItems: "center",
              border: "3px solid #fcfefe",
            }}
            className={`d-flex align-items-center `}
          >
            <form className="w-100" onSubmit={handleSubmit}>
              <p
                style={{
                  fontSize: "20px",
                  textTransform: "uppercase",
                  fontWeight: "600",
                }}
              >
                {!isSignUp ? "LOGIN" : "SIGN UP"}
              </p>
              {isSignUp && (
                <div className="">
                  <Jsinput
                    type={"text"}
                    placeholder={"Enter your name.."}
                    className={"js-input"}
                    name="name"
                    error={errors.name}
                    touched={touched}
                    onChange={handleChange}
                  />
                </div>
              )}
              <div className="mt-4">
                <Jsinput
                  type={"email"}
                  placeholder={"Enter your email.."}
                  className={"js-input"}
                  name="email"
                  error={errors.email}
                  onChange={handleChange}
                />
              </div>
              {isSignUp && (
                <div className="mt-4">
                  <Jsinput
                    type={"text"}
                    placeholder={"Enter your phone.."}
                    className={"js-input"}
                    name="mobileno"
                    error={errors.mobileno}
                    onChange={handleChange}
                  />
                </div>
              )}
              <div className="mt-4">
                <Jsinput
                  type={"password"}
                  placeholder={"Enter your password.."}
                  className={"js-input"}
                  name="password"
                  error={errors.password}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-4">
                <JsButton type={"Submit"} variant="contained">
                  Sign In
                </JsButton>
              </div>

              <small className="link-color">Forgotten password?</small>
              <div className="mt-5 text-center">
                <JsButton
                  onClick={() => setIsSignUp(!isSignUp)}
                  variant="contained"
                >
                  {!isSignUp ? "CREATE AN ACCOUNT" : "LOG IN"}
                </JsButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
