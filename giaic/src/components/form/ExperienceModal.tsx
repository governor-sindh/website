// https://youtu.be/tvEeNPy7OVA
"use client";
import { useForm } from "react-hook-form";
import { IApplyForm, IExperience } from "@/types/";
import type { Dispatch, SetStateAction } from "react";
import { Input } from "@/components";
// import { useState } from "react";
import { employmentType } from "@/data";

export default function ExperienceModal({
  experienceModal,
  setExperienceModal,
  setExperienceData,
}: {
  experienceModal: boolean;
  setExperienceModal: Dispatch<SetStateAction<boolean>>;
  setExperienceData: Dispatch<SetStateAction<IExperience[]>>;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IExperience>({});

  const onFormSubmit = (data: IExperience) => {
    console.log(data);
  };

  return (
    <>
      {experienceModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
          <div className="relative mx-auto my-6 w-auto max-w-3xl">
            <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
              <div className="flex items-start justify-between rounded-t border-b border-solid border-gray-300 p-5 ">
                <h3 className="font=semibold text-3xl">Work Experience</h3>
              </div>
              <div className="relative flex-auto p-6">
                <form
                  onSubmit={handleSubmit(onFormSubmit)}
                  className="w-full rounded bg-gray-200 px-8 pb-8 pt-6 shadow-md"
                >
                  <Input
                    type="text"
                    id="title"
                    placeholder="Job Title"
                    register={register}
                    errors={errors}
                  />
                  <select
                    {...register("employmentType", { required: true })}
                    id="qualification"
                    className="mb-8 block w-full border border-gray-400 bg-gray-100 p-3  md:text-lg"
                    required
                  >
                    <option value="null">Please Select</option>
                    {employmentType.map((item, i) => (
                      <option key={i} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  {errors.employmentType && (
                    <p className="mb-4 text-red-400">
                      {errors.employmentType?.message}
                    </p>
                  )}
                  <Input
                    type="text"
                    id="industry"
                    placeholder="Industry"
                    register={register}
                    errors={errors}
                  />
                  <Input
                    type="text"
                    id="companyName"
                    placeholder="Company Name"
                    register={register}
                    errors={errors}
                  />
                  {/*  */}
                </form>
              </div>
              <div className="border-blueGray-200 flex items-center justify-end rounded-b border-t border-solid p-6">
                <button
                  className="background-transparent mb-1 mr-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none focus:outline-none"
                  type="button"
                  onClick={() => setExperienceModal(false)}
                >
                  Close
                </button>
                <button
                  className="mb-1 mr-1 rounded bg-yellow-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none hover:shadow-lg focus:outline-none active:bg-yellow-700"
                  type="submit"
                  onClick={() => setExperienceModal(false)}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
