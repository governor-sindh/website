import { DownloadAdmitCard } from "@/components";

const data = {
  fullName: "Muhammad Anas",
  fatherName: "Muhammad Asif",
  cnic: "4240180922311",
  dateOfRegistration: "6-1-2023",
  studentId: "00031934",
};
export default function page() {
  return <DownloadAdmitCard data={data} />;
}
