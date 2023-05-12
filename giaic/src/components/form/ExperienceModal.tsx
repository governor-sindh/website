// https://youtu.be/tvEeNPy7OVA
"use client";
import { useForm } from "react-hook-form";
import { IExperience } from "@/types/";
import type { Dispatch, SetStateAction } from "react";
import { Input } from "@/components";
import { employmentType } from "@/data";
import { yupResolver } from "@hookform/resolvers/yup";
import { experienceSchema } from "@/lib/yupValidation";
import uuid from "react-uuid";

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
  } = useForm<IExperience>({
    mode: "onTouched",
    resolver: yupResolver(experienceSchema),
  });

  const onFormSubmit = (data: IExperience) => {
    setExperienceData((perv) => [...perv, { id: uuid(), ...data }]);
    setExperienceModal(false);
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
              <form
                onSubmit={handleSubmit(onFormSubmit)}
                className="relative flex-auto rounded bg-gray-200 p-4  shadow-md  md:w-full"
              >
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="bdr3 min-w-[277px]">
                    <Input
                      type="text"
                      id="title"
                      placeholder="Job Title"
                      register={register}
                      errors={errors}
                      required={true}
                    />
                    <label
                      htmlFor="employmentType"
                      className="text-md mb-6 mt-4 text-gray-400 md:text-xl"
                    >
                      Employment Type *
                    </label>
                    <select
                      {...register("employmentType", { required: true })}
                      id="employmentType"
                      className="mb-4 block w-full border border-gray-400 bg-gray-100 p-3  md:text-lg"
                      // required
                    >
                      <option value="n">Please Select</option>
                      {employmentType.map((item, i) => (
                        <option key={uuid()} value={item}>
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
                      required={true}
                    />
                  </div>
                  <div className="bdr2 min-w-[277px]">
                    <Input
                      type="text"
                      id="companyName"
                      placeholder="Company Name"
                      register={register}
                      errors={errors}
                      required={true}
                    />
                    <Input
                      type="date"
                      id="startDate"
                      placeholder="Start Date"
                      register={register}
                      errors={errors}
                      required={true}
                    />{" "}
                    <Input
                      type="date"
                      id="endDate"
                      placeholder="End Date"
                      register={register}
                      errors={errors}
                    />
                    {/* <label className="text-md mb-8 mt-4 text-gray-400 md:text-xl">
                      {" "}
                      Currently Working *
                    </label>
                    <div className="mb-4 flex justify-center gap-20 text-xl">
                      <div className="flex items-center  ">
                        <input
                          {...register("currentlyWorking", { required: true })}
                          type="radio"
                          value="yes"
                          className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                        />
                        <label className="ml-2 text-2xl font-medium text-gray-900 dark:text-gray-300">
                          Yes
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          {...register("currentlyWorking", { required: true })}
                          type="radio"
                          value="no"
                          className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                        />
                        <label className="ml-2 text-2xl font-medium text-gray-900 dark:text-gray-300">
                          No
                        </label>
                      </div>
                    </div>
                    {errors.currentlyWorking && (
                      <p className="mb-4 text-red-400">
                        {errors.currentlyWorking?.message}
                      </p>
                    )} */}
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
                    className="mb-1 mr-1 rounded bg-main px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none hover:shadow-lg focus:outline-none active:bg-blue-700"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
