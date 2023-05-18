"use client";
import { Input, Loader, AdmitCard, PrintableAdmitCard } from "@/components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { admitCardRequirementsSchema } from "@/lib/yupValidation";
import { IAdmitCard, IAdmitCardRequirements } from "@/types";
import { Poppins } from "next/font/google";
import { useState } from "react";

const poppins = Poppins({
  weight: ["300", "400", "500", "800", "900"],
  subsets: ["latin"],
});

export default function Page() {
  const [loading, setLoading] = useState<boolean>(false);
  const [formDisable, setFormDisable] = useState<boolean>(false);
  const [data, setData] = useState<IAdmitCard>({
    fullName: "Shehzad",
    fatherName: "dfdfdfdfdf",
    cnic: "string",
    dateOfRegistration: "date",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAdmitCardRequirements>({
    mode: "onTouched",
    resolver: yupResolver(admitCardRequirementsSchema),
  });

  const onFormSubmit = async (formData: IAdmitCardRequirements) => {
    try {
      setLoading(true);
      console.log(formData);
      const sleep = () => new Promise((resolve) => setTimeout(resolve, 2500));
      await sleep();

      const res = await fetch("/api/admitcard", {
        body: JSON.stringify(formData.email),
        method: "POST",
      });
      //  setData(await res.json())
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center">
      <h1
        style={poppins.style}
        className="my-8 text-center text-lg font-bold text-main print:hidden md:text-3xl"
      >
        Download Admit Card
      </h1>
      {formDisable ? (
        <>
          <AdmitCard data={data} />
          <PrintableAdmitCard data={data} />
          <button
            className="mt-5 w-full bg-sub py-3 text-center text-sm font-semibold tracking-widest text-white transition-all hover:translate-y-1 print:hidden sm:w-52 sm:py-4 sm:text-base"
            onClick={() => window.print()}
          >
            DOWNLOAD{" "}
          </button>
        </>
      ) : (
        <form
          className="-top-10 z-10 mx-4 my-10 w-full max-w-2xl rounded px-4 py-8 text-black shadow-lg md:mx-10 md:px-6"
          onSubmit={handleSubmit(onFormSubmit)}
        >
          <Input
            type="email"
            id="email"
            placeholder="Email"
            required={true}
            register={register}
            errors={errors}
          />
          <button
            type="submit"
            style={poppins.style}
            disabled={loading || formDisable}
            className="text mt-5 w-52 bg-sub py-4 text-center text-base font-semibold tracking-widest text-white transition-all hover:translate-y-1 disabled:opacity-60 disabled:hover:cursor-not-allowed sm:w-full sm:py-3 sm:text-sm"
          >
            {loading ? <Loader width="w-4" height="h-4" /> : "GET CARD"}
          </button>
        </form>
      )}
    </main>
  );
}
