import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First Name is required")
    .min(3, "Minimum 3 characters are required"),
  lastName: yup
    .string()
    .required("Last Name is required")
    .min(3, "Minimum 3 characters are required"),
  email: yup
    .string()
    .required("Email is required")
    .email("invalid email address"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Repeat Password must match"),
});
