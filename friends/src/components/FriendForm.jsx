import React from "react";
import { withFormik, Form, Field } from "formik";
import { axiosWithAuth } from "../utility/axiosWithAuth";

const FriendForm = () => {
  return (
    <div>
      <Form>
        <label>Name</label>
        <Field name="name" placeholder="Name" />
        <label>Age</label>
        <Field name="age" placeholder="Age" type="Number" />
        <label>Email</label>
        <Field name="email" type="email" placeholder="Email" />
        <button>Add Friend</button>
      </Form>
    </div>
  );
};

export default withFormik({
  mapPropsToValues() {
    return {
      name: "",
      age: "",
      email: ""
    };
  },
  handleSubmit(values, form) {
    axiosWithAuth
      .post("/friends", values, {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
      .then(res => {
        form.props.addFriend(res.data);
      })
      .catch(err => console.log(err.response));
  }
})(FriendForm);
