import * as yup from "yup";

export const schema = yup.object({
  fullName: yup
    .string()
    .required("Full Name is required")
    .min(3, "Please enter more then 3 characters")
    .max(40, "Please enter within 40 characters"),
  cnic: yup
    .string()
    .required("CNIC Number is required")
    .min(10, "Please enter more then 10 characters")
    .max(40, "Please enter within 40 characters"),
  phoneNumber: yup
    .string()
    .required("Phone Number is required")
    .min(10, "Please enter more then 10 characters")
    .max(16, "Please enter within 16 characters"),
  city: yup
    .string()
    .required("City is required")
    .min(2, "Please select your City"),
  // .max(25, "Please enter within 25 characters"),
  email: yup
    .string()
    .email("Email is not valid")
    .required("Email is required")
    .min(3, "Please enter more then 3 characters")
    .max(45, "Please enter within 45 characters"),

  gender: yup.string().required("Gender is required"),
  highestQualification: yup
    .string()
    .required("Qualification is required")
    .min(5, "Qualification is required"),
  github: yup
    .string()
    .url("Enter valid URL with http")
    .max(60, "Website URL can't be more then 60"),
  linkedin: yup
    .string()
    .url("Enter valid URL with http")
    .max(60, "Website URL can't be more then 60"),
  discord: yup
    .string()
    .url("Enter valid URL with http")
    .max(60, "Website URL can't be more then 60"),
});
