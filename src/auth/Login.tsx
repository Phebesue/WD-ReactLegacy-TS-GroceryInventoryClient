import * as React from "react";
import { TextField, Button } from "@material-ui/core";
import { Formik, Form } from "formik";

interface Values {
  userName: string;
  password: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}

export const Login: React.FC<Props> = ({ onSubmit }) => {
  return (
    <div>
          <h2>Login</h2>
      <Formik
        initialValues={{
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
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
};
