import { TFields } from "@/types";

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
  type: "text" | "number" | "email" | "date" | "tel";
  required?: boolean;
  register: any;
  errors: any;
}) {
  return (
    <div className="my-6">
      <label htmlFor={id} className="mb-6 mt-4 text-slate-700 md:text-xl">
        {placeholder} {required ? "*" : "(optional)"}
      </label>
      <input
        type={type}
        id={id}
        max={type === "date" ? `${new Date().getFullYear() - 13}-12-29` : ""}
        className={`mb-2 mt-1 block h-12 w-full rounded border border-gray-400 bg-gray-100 p-3 ${
          errors?.[id]
            ? "border-red-400 ring-red-500"
            : "focus:border-sub focus:ring-sub"
        } outline-none focus:ring-1 md:text-xl`}
        placeholder={` ${placeholder}`}
        {...register(id, { valueAsDate: false })}
      />
      {errors?.[id] && (
        <p className="mb-4 text-red-400">{errors?.[id]?.message}</p>
      )}
    </div>
  );
}
