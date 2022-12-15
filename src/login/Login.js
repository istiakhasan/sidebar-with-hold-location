import React from "react";
import loginimg from "../asset/images/login/login.jpg";
import JsButton from "../common/JsButton";
import Jsinput from "../common/Jsinput";
import { useFormik } from "formik";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase.config/firebase.config";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate=useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
  const { handleSubmit, handleChange } = useFormik({
    initialValues: { mobileno: "", password: "" },
    onSubmit: (values) => {
      signInWithEmailAndPassword(values.mobileno,values.password)
    },
  });
  if(user){
    navigate("/")
  }
  console.log(user,"user")
  return (
    <div className="min-vh-100  container-fluid ">
      <div className="row component-background-color">
        <div className="col-lg-6 vh-100 p-0 d-none d-lg-block">
          <img
            style={{ objectFit: "cover" }}
            className="img-fluid h-100 w-100"
            src={loginimg}
            alt=""
          />
        </div>
        <div className="col-lg-6 vh-100  p-0 d-flex align-items-center justify-content-center">
          <div
            style={{
              padding: " 40px",
              height: "400px",
              width: "488px",
              border: "3px solid #fcfefe",
            }}
            className="d-flex align-items-center "
          >
            <form className="w-100" onSubmit={handleSubmit}>
              <p
                style={{
                  fontSize: "20px",
                  textTransform: "uppercase",
                  fontWeight: "600",
                }}
              >
                Login
              </p>
              <div>
                <Jsinput
                  type={"email"}
                  placeholder={"Enter your Phone Number.."}
                  className={"js-input"}
                  autoComplete={"false"}
                  name="mobileno"
                  onChange={handleChange}
                />
              </div>
              <div className="mt-4">
                <Jsinput
                  type={"password"}
                  placeholder={"Enter your Phone Number.."}
                  className={"js-input"}
                  name="password"
                  onChange={handleChange}
                />
              </div>
              <div className="mt-4">
                <JsButton type={"Submit"} variant="contained">
                  Sign In
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
