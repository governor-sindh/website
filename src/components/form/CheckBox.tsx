import { UseFormRegister } from "react-hook-form";
import { IApplyForm } from "@/types";

export default function CheckBox({
  value,
  register,
}: {
  value: string;
  register: UseFormRegister<IApplyForm>;
}) {
  return (
    <div className="mb-2 flex items-center">
      <input
        id={value}
        type="checkbox"
        value={value.toLowerCase()}
        {...register("programmingLanguages", { required: true })}
        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
      />
      <label htmlFor={value} className="text-md ml-2 font-medium text-gray-800">
        {" "}
        {value}
      </label>
    </div>
  );
}
