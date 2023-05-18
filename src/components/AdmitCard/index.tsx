import { IAdmitCard } from "@/types";

export default function AdmitCard({ data }: { data: IAdmitCard }) {
  return (
    <div>
      <h2>Admit Card</h2>
      Name: {data.fullName}
      father Name: {data.fatherName}
    </div>
  );
}
