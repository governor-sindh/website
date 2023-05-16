// export interface MyFormUnion extends IApplyForm, IExperience, IProjects {}

export interface IExperience {
  id: string;
  title: string;
  employmentType:
    | "Full-time"
    | "Part-time"
    | "Self-employed"
    | "Freelance"
    | "Contract"
    | "Internship"
    | "Apprenticeship"
    | "Seasonal";
  industry: string;
  companyName: string;
  startDate: string;
  endDate: string;
}

export interface IApplyForm {
  fullName: string;
  fatherName: string;
  cnic: string;
  phoneNumber: string;
  city: string;
  email: string;
  gender: "male" | "female";
  dateOfBirth: string;
  highestQualification:
    | "Matric / O Levels"
    | "Intermediate / A Levels"
    | "Undergraduate (Bachelor's)"
    | "Graduate (Master's)"
    | "Post-Graduate (PhD)";
  experiences?: IExperience[];
}

export type TFields =
  | "fullName"
  | "fatherName"
  | "cnic"
  | "phoneNumber"
  | "city"
  | "email"
  | "dateOfBirth"
  | "gender"
  | "highestQualification"
  | "experiences"
  | "programmingLanguages"
  | "programmingProjects"
  | "title"
  | "employmentType"
  | "industry"
  | "companyName"
  | "startDate"
  | "endDate"
  | "currentlyWorking";

// export interface ISignup {
//   fullName: string;
//   CNIC: string;
//   email: string;
//   password: string;
// }
