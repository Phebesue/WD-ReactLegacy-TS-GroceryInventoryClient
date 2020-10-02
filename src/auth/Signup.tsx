import { TextField, Button } from "@material-ui/core";
import { Form, Formik } from "formik";
import * as React from "react";

interface Values {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}

export const Signup: React.FC<Props> = ({ onSubmit }) => {
  return (
    <div>
        <h2>Sign Up</h2>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          userName: "",
          password: "",
        }}
        onSubmit={(values) => {
          onSubmit(values);
        }}
      >
        {({ values, handleChange, handleBlur }) => (
          <Form>
            <div>
              <TextField
                placeholder="First Name"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleChange}
              />
            </div>
            <div>
              <TextField
                placeholder="Last Name"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleChange}
              />
            </div>
            <div>
              <TextField
                placeholder="User Name"
                name="userName"
                value={values.userName}
                onChange={handleChange}
                onBlur={handleChange}
              />
            </div>
            <div>
              <TextField
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleChange}
              />
            </div>
            <Button type="submit">submit </Button>
            <pre>{JSON.stringify(values, null, 5)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
};
