import React from "react";
import { withFormik, Form, Field } from "formik";
import { axiosWithAuth } from "../utility/axiosWithAuth";

const FriendForm = () => {
  return (
    <div>
      <Form className="friend-form">
        <Field name="name" placeholder="Name" />
        <Field name="age" placeholder="Age" type="Number" />
        <Field name="email" type="email" placeholder="Email" />
        <button>Add Friend</button>
      </Form>
    </div>
  );
};

export default withFormik({
  mapPropsToValues(props) {
    console.log(props.friendToEdit);
    if (props.editMode) {
      console.log("editmode");
      return {
        name: "edit",
        age: "",
        email: ""
      };
    } else {
      return {
        name: "",
        age: "",
        email: ""
      };
    }
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
