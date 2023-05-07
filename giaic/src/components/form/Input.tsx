import { TFields, IApplyForm, IExperience } from "@/types";
import type { UseFormRegister, FieldErrors } from "react-hook-form";

export default function Input({
  id,
  placeholder,
  type,
  required,
  register,
  errors,
}: {
  id: TFields;
  placeholder: string;
  type: "text" | "number" | "email" | "date";
  required?: boolean;
  register: UseFormRegister<IApplyForm>;
  errors: FieldErrors<IApplyForm>;
}) {
  return (
    <>
      {" "}
      <label
        htmlFor={id}
        className="text-md mb-6 mt-4 text-gray-400 md:text-xl"
      >
        {" "}
        {placeholder} {required ? "*" : "(optional)"}
      </label>
      <input
        type={type}
        id={id}
        className="border-rounded-lg text-md mb-2 mt-2 block w-full rounded border border-gray-400 bg-gray-100 p-3 md:text-xl"
        placeholder={` ${placeholder}`}
        {...register(id)}
      />
      {errors?.[id] && (
        <p className="mb-4 text-red-400">{errors?.[id]?.message}</p>
      )}
    </>
  );
}
