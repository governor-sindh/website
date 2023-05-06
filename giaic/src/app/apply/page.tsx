"use client";
import { useForm } from "react-hook-form";
import { IApplyForm, TFields } from "@/types/interfaces";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, useDisclosure, useToast } from "@chakra-ui/react";
// import ExperienceModal from "@/components/ExperienceModal";
import { schema } from "@/lib/yupValidation";
// import CheckBox from "@/components/CheckBox";

const qualifications = [
  "Matric / O Levels",
  "Intermediate / A Levels",
  "Undergraduate (Bachelor's)",
  "Graduate (Master's)",
  "Post-Graduate (PhD)",
];

export default function Page() {
  const modal1 = useDisclosure();
  const toast = useToast();

  const [experience, setExperience] = useState([]);
  // const [experience, setExperience] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log("rerender");

  const { register, handleSubmit, formState } = useForm<IApplyForm>({
    defaultValues: { city: "Karachi" },
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const { errors, isValid, isSubmitting } = formState;

  const onFormSubmit = async (data: IApplyForm) => {
    try {
      setLoading(true);
      console.log("data", data);
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

  function CheckBox({ value }: { value: string }) {
    return (
      <div className="mb-2 flex items-center">
        <input
          id={value}
          type="checkbox"
          value={value.toLowerCase()}
          {...register("programmingLanguages", { required: true })}
          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
        />
        <label
          htmlFor={value}
          className="text-md ml-2 font-medium text-gray-900 dark:text-gray-300"
        >
          {" "}
          {value}
        </label>
      </div>
    );
  }

  const Input = ({
    id,
    placeholder,
    type,
    required,
  }: {
    id: TFields;
    placeholder: string;
    type: "text" | "number" | "email";
    required?: boolean;
  }) => {
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
  };

  return (
    <main className="flex justify-center">
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        noValidate
        className="container mx-4 my-10 w-full max-w-2xl rounded bg-white px-4 py-8 text-black shadow-lg md:mx-10 md:px-6"
      >
        <h1 className="mb-8 text-center text-lg font-bold text-green-800 md:text-3xl">
          Student Course Registration Form{" "}
        </h1>
        <Input type="text" id="fullName" placeholder="Name" required={true} />
        <Input type="number" id="cnic" placeholder="CNIC" required={true} />
        <Input
          type="number"
          id="phoneNumber"
          placeholder="Phone Number"
          required={true}
        />
        <Input type="text" id="city" placeholder="City" required={true} />
        <Input type="email" id="email" placeholder="Email" required={true} />
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
          {qualifications.map((item, i) => (
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
        <Input type="text" id="github" placeholder="Github link" />
        <Input type="text" id="linkedin" placeholder="Linkedin link" />
        <Input type="text" id="discord" placeholder="Discord link" />

        <label className="text-md mb-4 block text-gray-400 md:text-xl">
          {" "}
          Experience (optional)
        </label>
        <button
          type="button"
          onClick={modal1.onOpen}
          className="mb-2 w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
        >
          Add Work Experience
        </button>
        {/* <ExperienceModal state={modal1} /> */}
        <label className="text-md mb-4 block text-gray-400 md:text-xl">
          Programming Languages (optional)
        </label>
        <CheckBox value="JavaScript" />
        <CheckBox value="TypeScript" />
        <CheckBox value="Python" />
        <CheckBox value="C#" />
        <CheckBox value="Swift" />
        <CheckBox value="C/C++" />
        <CheckBox value="Java" />
        <CheckBox value="Solidity" />
        <CheckBox value="Other" />

        {/* </div> */}

        <label className="text-md mb-4 block text-gray-400 md:text-xl">
          {" "}
          Programming projects (optional)
        </label>
        <button
          type="button"
          className="mb-2 w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
        >
          Add Programming projects Experience
        </button>

        <div className="flex w-full justify-center">
          {/* validation is only allow form submission when form is valid and isSubmitting for not resubmitting form */}
          {/* <button
            // disabled={!isValid || isSubmitting}
            type="submit"
            className="mb-8 mt-8 w-36 justify-center rounded-full border border-gray-700 bg-blue-700 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:w-52 md:text-xl"
          >
            Apply Now
          </button>  */}
          <Button
            type="submit"
            isLoading={loading}
            loadingText="Applying"
            colorScheme="telegram"
            variant="solid"
          >
            Apply Now
          </Button>
        </div>
      </form>
    </main>
  );
}
