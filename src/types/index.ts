export interface IExperience {
  id: string;
  title: string;
  industry: string;
  companyName: string;
  yearsOfExperience: string;
}

export interface IApplyForm {
  fullName: string;
  fatherName: string;
  cnic: string;
  phoneNumber: string;
  city: string;
  email: string;
  gender: "male" | "female";
  dateOfBirth: any;
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
  | "title"
  | "yearsOfExperience"
  | "industry"
  | "companyName";
