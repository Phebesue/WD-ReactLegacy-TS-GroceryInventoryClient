import * as React from 'react';
import { TextField } from "@material-ui/core";
import { TextFieldProps } from "@material-ui/core/TextField/TextField";
import { FieldProps } from "formik";


// interface Props extends FieldProps, TextFieldProps {
// label: string;
// placeholder:string;
// }

export const MyField: React.FC<FieldProps & TextFieldProps> = ({label, placeholder, field}) =>{
    return <TextField label={label} placeholder={placeholder} {...field} />;
};
