export interface IProjects {
  title: string;
  repoLink: string;
  hostedLink?: string;
  description?: string;
  // id: string;
}

export interface IExperience {
  // id: string;
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
  github?: string;
  linkedin?: string;
  discord?: string;

  experiences?: IExperience[];
  programmingLanguages?: string[];
  programmingProjects?: IProjects[];
}

export type TFields =
  | "fullName"
  | "cnic"
  | "phoneNumber"
  | "city"
  | "email"
  | "dateOfBirth"
  | "gender"
  | "highestQualification"
  | "github"
  | "linkedin"
  | "discord"
  | "experiences"
  | "programmingLanguages"
  | "programmingProjects"
  | "title"
  | "employmentType"
  | "industry"
  | "companyName"
  | "startDate"
  | "endDate"
  | "currentlyWorking"
  | "title"
  | "repoLink"
  | "hostedLink"
  | "description";

// export interface ISignup {
//   fullName: string;
//   CNIC: string;
//   email: string;
//   password: string;
// }
