import React from 'react';
import {withFormik, Form, Field} from 'formik'

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
            </Form>
        </div>
    );
};

export default withFormik({
    mapPropsToValues({email, password}) {
        return {
            email: email || "",
            password: password || ""
        }
    }
})(Login);