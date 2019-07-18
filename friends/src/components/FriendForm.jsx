import React from "react";
import { withFormik, Form, Field } from "formik";

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

export default withFormik()(FriendForm);
