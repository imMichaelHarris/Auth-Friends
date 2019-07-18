import React from "react";
import { withFormik, Form, Field } from "formik";
import { axiosWithAuth } from "../utility/axiosWithAuth";

const Login = () => {
  return (
    <div>
      Login
      <Form>
        <legend>Logn</legend>
        <label>Username</label>
        <Field name="username" type="text" placeholder="Username" />
        <label>Password</label>
        <Field name="password" type="password" placeholder="Password" />
        <button>Login</button>
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
  handleSubmit(values) {
    console.log(values);
    axiosWithAuth
      .post("/login", values)
      .then(res => console.log(res))
      .catch(err => console.log(err.response));
  }
})(Login);
