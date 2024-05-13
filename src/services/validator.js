import * as yup from "yup";

//----------------------------LOGIN SCHEMA----------------------------------------
export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character"
    )
    .required("Password is required"),
});

//----------------------------SIGNUP SCHEMA---------------------------------------

export const SignupSchema = yup.object({
  firstName: yup.string().required("First Name is required!!"),
  lastName: yup.string().required("Last Name is required!!"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required!!"),
  address: yup.string().required("Address is required!!"),
  postalCode: yup.number().required("postal code is required!!"),

  city: yup.string().required("city is required!!"),
  country: yup.string().required("Country is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character"
    )
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password does not match")
    .required("Confirm Password is required"),
  conditions: yup.boolean(),
});

//----------------------------EDIT PROFILE SCHEMA---------------------------------------

export const editProfileSchema = yup.object({
  firstName: yup.string().required("First Name is required!!"),
  lastName: yup.string().required("Last Name is required!!"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required!!"),
  phoneNo: yup.string().required("Phone no is required!!"),
  address: yup.string().required("Address is required!!"),
  postalCode: yup.number().required("postal code is required!!"),
});
export const changePasswordSchema = yup.object({
  newpassword: yup
  .string()
  .min(8, "Password must be at least 8 characters")
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character"
  )
  .required("Password is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character"
    )
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password does not match")
    .required("Confirm Password is required"),
})
