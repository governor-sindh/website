"use client";
import {
  AdmitCard,
  ExperienceModal,
  Input,
  Loader,
  PrintableAdmitCard,
} from "@/components";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IApplyForm, IExperience } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { mainFormSchema } from "@/lib/yupValidation";
import { formCities, formQualifications } from "@/data";
import { useToast } from "@chakra-ui/react";
import { Poppins } from "next/font/google";
import { IoRemoveCircleOutline } from "react-icons/io5";
import Link from "next/link";

const poppins = Poppins({
  weight: ["300", "400", "500", "800", "900"],
  subsets: ["latin"],
});

export default function Page() {
  const toast = useToast();

  const [showExperience, setShowExperience] = useState<boolean>(false);
  const [experienceData, setExperienceData] = useState<IExperience[]>([]);
  const [experienceModal, setExperienceModal] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [isApplied, setIsApplied] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<any>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IApplyForm>({
    mode: "onTouched",
    resolver: yupResolver(mainFormSchema),
  });

  const onFormSubmit = async (data: IApplyForm) => {
    try {
      setLoading(true);
      const formData = {
        fullName: data.fullName.toLowerCase(),
        fatherName: data.fatherName.toLowerCase(),
        cnic: Number(data.cnic),
        phoneNumber: Number(`92${data.phoneNumber}`),
        city: data.city.toLowerCase(),
        email: data.email.toLowerCase(),
        dateOfBirth: `${data.dateOfBirth.getFullYear()}-${
          data.dateOfBirth.getMonth() + 1
        }-${data.dateOfBirth.getDate()}`,
        gender: data.gender,
        highestQualification: data.highestQualification,
        experiences: experienceData.length ? experienceData : null,
      };

      const res = await fetch("/api/applyform", {
        body: JSON.stringify(formData),
        method: "POST",
      });

      const resData: any = await res.json();
      if (!resData.users) {
        throw new Error(resData.message);
      }

      setFormValues({
        ...formData,
        ...(resData.users[0] && { users: resData.users[0] }),
      });

      toast({
        title: `${resData.message}`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });

      setIsApplied(true);

      // if (resData.message === "Applied Successfully") reset()
    } catch (err: any) {
      toast({
        title: `Error`,
        description: `${err.message}`,
        status: "error",
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      // style={{ backgroundImage: `url('/formBg.png')` }}
      className="mb-20 flex justify-center bg-contain bg-fixed bg-center bg-no-repeat"
    >
      {isApplied && formValues && formValues.users && (
        <div className="mt-10 flex flex-col items-center justify-center gap-6">
          <AdmitCard
            data={{
              cnic: formValues.cnic,
              dateOfRegistration: formValues.users.createdAt,
              fatherName: formValues.fatherName,
              fullName: formValues.fullName,
              studentId: formValues.users.id,
            }}
          />

          <PrintableAdmitCard
            data={{
              cnic: formValues.cnic,
              dateOfRegistration: formValues.users.createdAt,
              fatherName: formValues.fatherName,
              fullName: formValues.fullName,
              studentId: formValues.users.id,
            }}
          />
          <button
            className="mx-8 mt-5 w-full bg-main py-3 text-center text-sm font-semibold tracking-widest text-white transition-all hover:translate-y-1 print:hidden sm:w-52 sm:py-4 sm:text-base"
            onClick={() => window.print()}
          >
            DOWNLOAD
          </button>
        </div>
      )}

      {!isApplied && (
        <form
          className="-top-10 z-10 mx-4 my-10 w-full max-w-2xl rounded bg-opacity-30 px-4 py-8 text-black shadow-lg backdrop-blur-3xl md:mx-10 md:px-6"
          onSubmit={handleSubmit(onFormSubmit)}
          noValidate
        >
          <h1
            style={poppins.style}
            className="mb-8 text-center text-lg font-bold text-main md:text-3xl"
          >
            Student Course Registration Form{" "}
          </h1>
          <p className="text-center">
            Already applied?{" "}
            <Link className="text-blue-400 underline" href={"/admit-card"}>
              Get Admit Card
            </Link>
          </p>
          <Input
            type="text"
            id="fullName"
            placeholder="Full Name"
            required={true}
            register={register}
            errors={errors}
          />
          <Input
            type="text"
            id="fatherName"
            placeholder="Father's Full Name"
            required={true}
            register={register}
            errors={errors}
          />
          <Input
            type="tel"
            id="cnic"
            placeholder="CNIC or B-Form Number"
            required={true}
            register={register}
            errors={errors}
          />
          <Input
            type="tel"
            id="phoneNumber"
            placeholder="Phone Number"
            required={true}
            register={register}
            errors={errors}
          />
          <label htmlFor="city" className="text-slate-700 md:text-xl">
            City *
          </label>
          <select
            {...register("city", { required: true })}
            id="city"
            className={`mb-2 mt-2 block w-full rounded border border-gray-400 bg-gray-100 p-3 md:text-lg ${
              errors?.city
                ? "border-red-400 ring-red-500"
                : "focus:border-sub focus:ring-sub"
            } outline-none focus:ring-1`}
            required
          >
            <option value="karachi">Karachi</option>
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
          <Input
            type="date"
            id="dateOfBirth"
            placeholder="Date of Birth"
            required={true}
            register={register}
            errors={errors}
          />
          <label className="text-slate-700 md:text-xl"> Gender *</label>
          <div className="mb-4 flex justify-center gap-20 text-xl">
            <label className="ml-2 cursor-pointer text-slate-700 md:text-xl">
              <input
                {...register("gender", { required: true })}
                type="radio"
                value="male"
                className="h-4 w-4 cursor-pointer text-sub"
              />
              <span> Male </span>
            </label>
            <label className="ml-2 cursor-pointer text-slate-700 md:text-xl">
              <input
                {...register("gender", { required: true })}
                type="radio"
                value="female"
                className="h-4 w-4 cursor-pointer text-sub"
              />
              <span> Female</span>
            </label>
          </div>
          {errors.gender && (
            <p className="mb-4 text-red-400">{errors.gender?.message}</p>
          )}
          <div className="my-6">
            <label
              htmlFor="qualification"
              className="text-slate-700 md:text-xl"
            >
              Highest Qualification *
            </label>
            <select
              {...register("highestQualification", { required: true })}
              id="qualification"
              className={`mb-2 mt-1 block w-full cursor-pointer rounded border border-gray-400 bg-gray-100 p-3 md:text-lg ${
                errors?.highestQualification
                  ? "border-red-400 ring-red-500"
                  : "focus:border-sub focus:ring-sub"
              } outline-none focus:ring-1`}
            >
              <option value="n">Please Select</option>
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
          </div>
          {/* <div className="mt-6 min-h-[8rem]">
          <label className="block text-slate-700 md:text-xl">
            Experience (optional)
          </label>

          <div className="mb-4 flex justify-center gap-20 text-xl">
            <label className="ml-2 cursor-pointer text-slate-700 md:text-xl">
              <input
                onClick={(e) => {
                  setShowExperience(true);
                }}
                type="radio"
                name="experience"
                className="h-4 w-4 cursor-pointer text-sub"
              />
              <span> Yes</span>
            </label>
            <label className="ml-2 cursor-pointer text-slate-700 md:text-xl">
              <input
                onClick={() => setShowExperience(false)}
                type="radio"
                name="experience"
                defaultChecked
                className="h-4 w-4 cursor-pointer text-sub"
              />
              <span> No</span>
            </label>
          </div>

          {showExperience && (
            <button
              type="button"
              onClick={() => setExperienceModal(!experienceModal)}
              className="mb-2 mt-1 w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-main hover:bg-gray-100 hover:text-blue-900 focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              Add Work Experience
            </button>
          )}

          <div className="space-y-2">
            {experienceData.map((item) => (
              <div
                className="flex items-center justify-between rounded-md border-2 border-gray-500 p-2 px-6"
                key={item.id}
              >
                <h4 className="flex w-2/3 justify-around text-lg capitalize text-slate-700">
                  <span>{item.title}</span> - <span>{item.companyName}</span>
                </h4>
                <button
                  className="px-4 py-1"
                  type="button"
                  onClick={() => {
                    const filteredData = experienceData.filter(
                      (value) => value.id !== item.id
                    );
                    setExperienceData(filteredData);
                  }}
                >
                  <IoRemoveCircleOutline className="text-2xl" />
                </button>
              </div>
            ))}
          </div>
        </div> */}
          <div className="flex w-full justify-center">
            <button
              type="submit"
              style={poppins.style}
              disabled={loading}
              className="text mt-5 w-52  bg-main py-4 text-center text-base font-semibold tracking-widest text-white transition-all hover:translate-y-1 disabled:opacity-60 disabled:hover:cursor-not-allowed sm:w-full sm:py-3 sm:text-sm"
            >
              {loading ? <Loader width="w-4" height="h-4" /> : "SUBMIT"}
            </button>
          </div>
        </form>
      )}
      {/* <button className="mt-5 w-full bg-sub py-3 text-center text-sm font-semibold tracking-widest text-white transition-all hover:translate-y-1 sm:w-52 sm:py-4 sm:text-base">
        </button> */}

      {experienceModal && (
        <ExperienceModal
          setExperienceModal={setExperienceModal}
          setExperienceData={setExperienceData}
        />
      )}
    </main>
  );
}
