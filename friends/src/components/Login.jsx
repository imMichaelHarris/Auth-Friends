import React from "react";
import { withFormik, Form, Field } from "formik";
import Loader from "react-loader-spinner";
import { axiosWithAuth } from "../utility/axiosWithAuth";

const Login = ({ isSubmitting }) => {
  return (
    <div>
      Login
      <Form>
        <legend>Logn</legend>
        <label>Username</label>
        <Field name="username" type="text" placeholder="Username" />
        <label>Password</label>
        <Field name="password" type="password" placeholder="Password" />

        {/* {isSubmitting ? (
          <Loader type="TailSpin" color="#somecolor" height={20} width={20} />
        ) : ( */}
          <button>Login</button>
        {/* )} */}
      </Form>
    </div>
  );
};

export default withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  handleSubmit(values, formikBag) {
    axiosWithAuth
      .post("/login", values)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        formikBag.props.history.push("/friends");
      })
      .catch(err => {
        // setSubmitting(false);
        console.log(err);
      });
  }
})(Login);
