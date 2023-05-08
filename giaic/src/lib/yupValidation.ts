import * as yup from "yup";

export const mainFormSchema = yup.object({
  fullName: yup
    .string()
    .required("Full Name is required")
    .min(3, "Please enter more then 3 characters")
    .max(40, "Please enter within 40 characters"),
  cnic: yup
    .string()
    .required("CNIC Number is required  without -")
    .min(13, "Please enter more then 13 characters")
    .max(13, "Please enter within 13 characters without -"),
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

export const experienceSchema = yup.object({
  title: yup
    .string()
    .required("Title is required")
    .min(3, "Please enter more then 3 characters")
    .max(40, "Please enter within 40 characters"),
  employmentType: yup
    .string()
    .required("Employment Type is required")
    .min(3, "Please select Employment type")
    .max(40, "Please enter within 40 characters"),
  industry: yup
    .string()
    .required("Industry is required")
    .min(3, "Please enter more then 3 characters")
    .max(40, "Please enter within 40 characters"),
  companyName: yup
    .string()
    .required("Industry is required")
    .min(3, "Please enter more then 3 characters")
    .max(40, "Please enter within 40 characters"),
  startDate: yup.date().typeError("Date is Required").required("Require daa"),
  // endDate: yup.date().typeError("Date is Required"),
  currentlyWorking: yup.string().required("Please select"),
});

export const projectSchema = yup.object({
  title: yup
    .string()
    .required("Full Name is required")
    .min(3, "Please enter more then 3 characters")
    .max(40, "Please enter within 40 characters"),
  repoLink: yup
    .string()
    .required("Full Name is required")
    .url("Enter valid URL with http")
    .min(3, "Please enter more then 3 characters")
    .max(40, "Please enter within 40 characters"),
  hostedLink: yup
    .string()
    .url("Enter valid URL with http")
    .max(40, "Please enter within 40 characters"),
  description: yup.string().max(60, "Please enter within 60 characters"),
});
