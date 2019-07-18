import React from "react";
import { withFormik, Form, Field } from "formik";
import { axiosWithAuth } from "../utility/axiosWithAuth";

const Login = () => {
  return (
    <div>
      Login
      <Form>
        <legend>Logn</legend>
        <label>Email</label>
        <Field name="email" type="email" placeholder="Email" />
        <label>Password</label>
        <Field name="password" type="password" placeholder="Password" />
        <button>Login</button>
      </Form>
    </div>
  );
};

export default withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "something@yah",
      password: password || ""
    };
  },
  handleSubmit(values) {
    console.log(values);
    axiosWithAuth
      .post("/login")
      .then(res => console.log(res))
      .catch(err => console.log(err.response));
  }
})(Login);
