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
  register: any; // UseFormRegister<IApplyForm>;
  errors: any; //FieldErrors<IApplyForm>;
}) {
  // console.log(
  //   `${new Date().getUTCFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`
  // );

  return (
    <div className="my-6">
      <label
        htmlFor={id}
        className="text-md mb-6 mt-4 text-gray-400 md:text-xl"
      >
        {placeholder} {required ? "*" : "(optional)"}
      </label>
      <input
        type={type}
        id={id}
        className="border-rounded-lg text-md mb-2 mt-1 block w-full rounded border border-gray-400 bg-gray-100 p-3 md:text-xl"
        placeholder={` ${placeholder}`}
        maxLength={id === "cnic" ? 13 : ""}
        // max={
        //   `2023-4-8`
        //   // type === "date"
        //   //   ? `${new Date().getUTCFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`
        //   //   : ""
        // }
        // maxLength={4}
        // onChange={(e) => console.log(e.target)}
        {...register(id, {
          valueAsDate: type === "date" ? true : false,
        })}
      />
      {errors?.[id] && (
        <p className="mb-4 text-red-400">{errors?.[id]?.message}</p>
      )}
    </div>
  );
}
