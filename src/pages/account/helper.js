import * as yup from "yup";

export const updatePasswordSchema = yup.object().shape({
  oldPassword: yup
    .string()
    .required("Old Password is required")
    .min(8, "Old  Password must be at least 8 characters"),
  newPassword: yup
    .string()
    .required("New Password is required")
    .min(8, "New Password must be at least 8 characters"),
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref("newPassword"), null], "Repeat New Password must match"),
});
