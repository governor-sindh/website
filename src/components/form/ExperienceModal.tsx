"use client";
import { useForm } from "react-hook-form";
import { IExperience } from "@/types";
import type { Dispatch, SetStateAction } from "react";
import { Input } from "@/components";
import { yupResolver } from "@hookform/resolvers/yup";
import { experienceSchema } from "@/lib/yupValidation";
import uuid from "react-uuid";
import { years, industries } from "@/data";

export default function ExperienceModal({
  setExperienceModal,
  setExperienceData,
}: {
  setExperienceModal: Dispatch<SetStateAction<boolean>>;
  setExperienceData: Dispatch<SetStateAction<IExperience[]>>;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IExperience>({
    mode: "onTouched",
    resolver: yupResolver(experienceSchema),
  });

  const onFormSubmit = (data: IExperience) => {
    setExperienceData((perv) => [...perv, { ...data, id: uuid() }]);
    setExperienceModal(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
      <div className="relative mx-auto my-6 w-auto max-w-3xl">
        <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
          <div className="flex items-start justify-between rounded-t border-b border-solid border-gray-300 p-5 ">
            <h3 className="text-3xl">Work Experience</h3>
          </div>
          <form
            onSubmit={handleSubmit(onFormSubmit)}
            className="relative flex-auto rounded bg-gray-200 p-4  shadow-md  md:w-full"
          >
            <div className="flex flex-wrap justify-center gap-4">
              <div className="min-w-[277px]">
                <Input
                  type="text"
                  id="title"
                  placeholder="Job Title"
                  register={register}
                  errors={errors}
                  required={true}
                />
                <div className="my-6">
                  <label
                    htmlFor="yearsOfExperience"
                    className="mb-6 mt-4 text-slate-700 md:text-xl"
                  >
                    Years of Experience *
                  </label>
                  <select
                    {...register("yearsOfExperience", { required: true })}
                    id="yearsOfExperience"
                    className={`mb-2 mt-1 block w-full rounded border border-gray-400 bg-gray-100 p-3 text-slate-800 ${
                      errors?.yearsOfExperience
                        ? "border-red-400 ring-red-500"
                        : "focus:border-sub focus:ring-sub"
                    } outline-none focus:ring-1 md:text-lg`}
                  >
                    {years.map((item, i) => (
                      <option key={i} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  {errors.yearsOfExperience && (
                    <p className="mb-4 text-red-400">
                      {errors.yearsOfExperience?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="min-w-[277px]">
                <div className="my-6">
                  <label
                    htmlFor="industry"
                    className="mb-6 mt-4 text-slate-700 md:text-xl"
                  >
                    Industries *
                  </label>
                  <select
                    {...register("industry", { required: true })}
                    id="industry"
                    className={`mb-2 mt-1 block w-full rounded border border-gray-400 bg-gray-100 p-3 text-slate-800 ${
                      errors?.industry
                        ? "border-red-400 ring-red-500"
                        : "focus:border-sub focus:ring-sub"
                    } outline-none focus:ring-1 md:text-lg`}
                  >
                    {industries.map((item, i) => (
                      <option key={i} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  {errors.industry && (
                    <p className="mb-4 text-red-400">
                      {errors.industry?.message}
                    </p>
                  )}
                </div>

                <Input
                  type="text"
                  id="companyName"
                  placeholder="Company Name"
                  register={register}
                  errors={errors}
                  required={true}
                />
              </div>
            </div>

            <div className="flex items-center justify-center border-t border-solid p-4">
              <button
                className="background-transparent mb-1 mr-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none focus:outline-none"
                type="button"
                onClick={() => setExperienceModal(false)}
              >
                Close
              </button>
              <button
                className="w-32 bg-sub py-3 text-center text-base font-semibold tracking-widest text-white sm:w-36 sm:py-3 sm:text-sm"
                type="submit"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
