"use client";
import { useForm } from "react-hook-form";
import { IProjects } from "@/types/";
import type { Dispatch, SetStateAction } from "react";
import { Input } from "@/components";
import { yupResolver } from "@hookform/resolvers/yup";
import { projectSchema } from "@/lib/yupValidation";
import uuid from "react-uuid";

export default function ProjectsModal({
  projectModal,
  setProjectModal,
  setProjectsData,
}: {
  projectModal: boolean;
  setProjectModal: Dispatch<SetStateAction<boolean>>;
  setProjectsData: Dispatch<SetStateAction<IProjects[]>>;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProjects>({
    mode: "onTouched",
    resolver: yupResolver(projectSchema),
  });

  const onFormSubmit = (data: IProjects) => {
    setProjectsData((perv) => [...perv, { id: uuid(), ...data }]);
    setProjectModal(false);
  };

  return (
    <>
      {projectModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
          <div className="relative mx-auto my-6 w-auto max-w-3xl">
            <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
              <div className="flex items-start justify-between rounded-t border-b border-solid border-gray-300 p-5 ">
                <h3 className="font=semibold text-3xl">Programming projects</h3>
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
                      placeholder="Project Title"
                      register={register}
                      errors={errors}
                      required={true}
                    />
                    <Input
                      type="text"
                      id="repoLink"
                      placeholder="Git Repo Link"
                      register={register}
                      errors={errors}
                      required={true}
                    />
                  </div>
                  <div className="min-w-[277px]">
                    <Input
                      type="text"
                      id="hostedLink"
                      placeholder="Hosted Link"
                      register={register}
                      errors={errors}
                    />
                    <Input
                      type="text"
                      id="description"
                      placeholder="Description"
                      register={register}
                      errors={errors}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-center border-t border-solid p-4">
                  <button
                    className="background-transparent mb-1 mr-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none focus:outline-none"
                    type="button"
                    onClick={() => setProjectModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-main mb-1 mr-1 rounded px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none hover:shadow-lg focus:outline-none active:bg-blue-700"
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
