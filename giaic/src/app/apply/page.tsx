"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ExperienceModal, CheckBox, Input, ProjectsModal } from "@/components";
import { IApplyForm, IExperience, IProjects } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "@/lib/yupValidation";
import { formCities, formQualifications } from "@/data";
import { Button, useToast } from "@chakra-ui/react";

export default function Page() {
  const toast = useToast();

  const [experienceData, setExperienceData] = useState<IExperience[]>([]);
  const [experienceModal, setExperienceModal] = useState<boolean>(false);
  const [projectsData, setProjectsData] = useState<IProjects[]>([]);
  const [projectModal, setProjectModal] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState } = useForm<IApplyForm>({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const { errors, isValid, isSubmitting } = formState;

  console.log(experienceData, projectsData);
  console.log(experienceData, projectsData);

  const onFormSubmit = async (data: IApplyForm) => {
    try {
      setLoading(true);

      const sleep = async (millis: number) =>
        new Promise((resolve) => setTimeout(resolve, millis));
      await sleep(2500);

      console.log("data", {
        fullName: data.fullName.toLowerCase(),
        cnic: data.cnic,
        phoneNumber: data.phoneNumber,
        city: data.city.toLowerCase(),
        email: data.email.toLowerCase(),
        gender: data.gender,
        highestQualification: data.highestQualification,
        github: data?.github,
        linkedin: data?.linkedin,
        discord: data?.discord,
        experiences: experienceData,
        programmingLanguages: data?.programmingLanguages
          ? data?.programmingLanguages
          : [],
        programmingProjects: projectsData,
      });
      // const res = await fetch("/api/applyform/", {
      //   // body:{},
      //   method: "",
      // });

      toast({
        title: "Applied Successfully.",
        description: "We've created your account for you.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (err: any) {
      console.log(err);
      toast({
        title: `Unknown error`,
        description: `${err?.message}`,
        status: "error",
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex justify-center">
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        noValidate
        className="container mx-4 my-10 w-full max-w-2xl rounded bg-white px-4 py-8 text-black shadow-lg md:mx-10 md:px-6"
      >
        <h1 className="mb-8 text-center text-lg font-bold text-green-700 md:text-3xl">
          Student Course Registration Form{" "}
        </h1>
        <Input
          type="text"
          id="fullName"
          placeholder="Name"
          required={true}
          register={register}
          errors={errors}
        />
        <Input
          type="number"
          id="cnic"
          placeholder="CNIC"
          required={true}
          register={register}
          errors={errors}
        />
        <Input
          type="number"
          id="phoneNumber"
          placeholder="Phone Number"
          required={true}
          register={register}
          errors={errors}
        />
        <label
          htmlFor="city"
          className=" text-md mb-6 mt-4 text-gray-400 md:text-xl"
        >
          City *
        </label>

        <select
          {...register("city", { required: true })}
          id="city"
          className="mb-8 block w-full border border-gray-400 bg-gray-100 p-3  md:text-lg"
          required
        >
          <option value="n">Please Select</option>
          {formCities.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </select>
        {errors.city && (
          <p className="mb-4 text-red-400">{errors.city?.message}</p>
        )}

        <Input
          type="email"
          id="email"
          placeholder="Email"
          required={true}
          register={register}
          errors={errors}
        />
        <label className="text-md mb-8 mt-4 text-gray-400 md:text-xl">
          {" "}
          Gender *
        </label>
        <div className="mb-4 flex justify-center gap-20 text-xl">
          <div className="flex items-center  ">
            <input
              {...register("gender", { required: true })}
              type="radio"
              value="male"
              className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
            />
            <label className="ml-2 text-2xl font-medium text-gray-900 dark:text-gray-300">
              {" "}
              Male
            </label>
          </div>
          <div className="flex items-center">
            <input
              {...register("gender", { required: true })}
              type="radio"
              value="female"
              className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
            />
            <label className="ml-2 text-2xl font-medium text-gray-900 dark:text-gray-300">
              {" "}
              Female
            </label>
          </div>
        </div>
        {errors.gender && (
          <p className="mb-4 text-red-400">{errors.gender?.message}</p>
        )}
        <label
          htmlFor="qualification"
          className=" text-md mb-6 mt-4 text-gray-400 md:text-xl"
        >
          Highest Qualification *
        </label>

        <select
          {...register("highestQualification", { required: true })}
          id="qualification"
          className="mb-8 block w-full border border-gray-400 bg-gray-100 p-3  md:text-lg"
          required
        >
          <option value="null">Please Select</option>
          {formQualifications.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </select>
        {errors.highestQualification && (
          <p className="mb-4 text-red-400">
            {errors.highestQualification?.message}
          </p>
        )}
        <Input
          type="text"
          id="github"
          placeholder="Github link"
          register={register}
          errors={errors}
        />
        <Input
          type="text"
          id="linkedin"
          placeholder="Linkedin link"
          register={register}
          errors={errors}
        />
        <Input
          type="text"
          id="discord"
          placeholder="Discord link"
          register={register}
          errors={errors}
        />

        <label className="text-md mb-4 block text-gray-400 md:text-xl">
          Experience (optional)
        </label>
        <button
          type="button"
          onClick={() => setExperienceModal(!experienceModal)}
          className="mb-2 w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-green-600 hover:bg-gray-100 hover:text-green-900 focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
        >
          Add Work Experience
        </button>

        <div className="space-y-2">
          {experienceData.map((item, i) => (
            <div
              className="flex items-center justify-between rounded-md border-2 border-gray-500 p-2"
              key={i}
            >
              <h4 className=" text-lg capitalize">
                {item.title} - {item.companyName}
              </h4>
              <button type="button"> X </button>
            </div>
          ))}
        </div>

        <label className="text-md mb-4 block text-gray-400 md:text-xl">
          Programming Languages (optional)
        </label>
        <CheckBox value="JavaScript" register={register} />
        <CheckBox value="TypeScript" register={register} />
        <CheckBox value="Python" register={register} />
        <CheckBox value="C#" register={register} />
        <CheckBox value="Swift" register={register} />
        <CheckBox value="C/C++" register={register} />
        <CheckBox value="Java" register={register} />
        <CheckBox value="Solidity" register={register} />
        <CheckBox value="Other" register={register} />

        <label className="text-md mb-4 block text-gray-400 md:text-xl">
          Programming projects (optional)
        </label>
        <button
          type="button"
          onClick={() => setProjectModal(!projectModal)}
          className="mb-2 w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-green-600 hover:bg-gray-100 hover:text-green-900 focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
        >
          Add Programming projects
        </button>

        <div className="space-y-2">
          {projectsData.map((item, i) => (
            <div
              className="flex items-center justify-between rounded-md border-2 border-gray-500 p-2"
              key={i}
            >
              <h4 className=" text-xl capitalize">{item.title}</h4>
              <button type="button"> X </button>
            </div>
          ))}
        </div>

        <div className="flex w-full justify-center">
          {/* validation is only allow form submission when form is valid and isSubmitting for not resubmitting form */}
          {/* <button
            className="mb-8 mt-8 w-36 justify-center rounded-full border border-gray-700 bg-blue-700 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:w-52 md:text-xl"
        */}

          <Button
            // disabled={!isValid || isSubmitting}
            type="submit"
            className="mb-8 mt-8 w-36 rounded-3xl shadow-xl"
            isLoading={loading}
            loadingText="Applying"
            colorScheme="green"
            variant="solid"
          >
            APPLY NOW
          </Button>
        </div>
      </form>
      {experienceModal && (
        <ExperienceModal
          experienceModal={experienceModal}
          setExperienceModal={setExperienceModal}
          setExperienceData={setExperienceData}
        />
      )}
      {projectModal && (
        <ProjectsModal
          projectModal={projectModal}
          setProjectModal={setProjectModal}
          setProjectsData={setProjectsData}
        />
      )}
    </main>
  );
}
