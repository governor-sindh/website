"use client";
import {
  Loader,
  AdmitCard,
  PrintableAdmitCard,
  EmailAndOtpFields,
} from "@/components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { admitCardRequirementsSchema } from "@/lib/yupValidation";
import { IAdmitCard, IAdmitCardRequirements } from "@/types";
import { Poppins } from "next/font/google";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";

const poppins = Poppins({
  weight: ["300", "400", "500", "800", "900"],
  subsets: ["latin"],
});

export default function Page() {
  const toast = useToast();

  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<IAdmitCard>();
  const [occupiedErr, setOccupiedErr] = useState({
    email: "",
    otp: "",
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IAdmitCardRequirements>({
    mode: "all",
    resolver: yupResolver(admitCardRequirementsSchema),
  });

  const onFormSubmit = async (formData: IAdmitCardRequirements) => {
    try {
      setLoading(true);
      const res = await fetch("/api/admitcard", {
        body: JSON.stringify({
          email: formData.email.toLowerCase(),
          otp: Number(formData.otp),
        }),
        method: "POST",
      });
      const data = await res.json();
      console.log("🚀 ~ file: page.tsx:52 ~ onFormSubmit ~ data:", data);
      if (
        data.message === "User not found" ||
        data.message === "Add your credentials"
      ) {
        setOccupiedErr({
          email: "OTP or Email is incorrect",
          otp: "OTP or Email is incorrect",
        });
        toast({
          title: `${data.message}`,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        return;
      }
      setData(data);
    } catch (err: any) {
      console.log("🚀 ~ file: page.tsx:66 ~ onFormSubmit ~ err:", err);
      toast({
        title: `${err.message}`,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
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
      {data ? (
        <>
          <AdmitCard data={data} />
          <PrintableAdmitCard data={data} />
          <button
            className="mt-5 w-[95%] bg-main py-3 text-center text-sm font-semibold tracking-widest text-white transition-all hover:translate-y-1 print:hidden sm:w-52 sm:py-4 sm:text-base"
            onClick={() => window.print()}
          >
            DOWNLOAD
          </button>
        </>
      ) : (
        <form
          className="-top-10 z-10 mx-4 my-10 w-full max-w-2xl rounded px-4 py-8 text-black shadow-lg md:mx-10 md:px-6"
          onSubmit={handleSubmit(onFormSubmit)}
          noValidate
        >
          <EmailAndOtpFields
            watch={watch}
            register={register}
            errors={errors}
            occupiedErr={occupiedErr}
            setOccupiedErr={setOccupiedErr}
          />
          <div className="flex justify-center">
            <button
              type="submit"
              style={poppins.style}
              disabled={loading}
              className="mt-5 w-full bg-main py-3 text-center text-sm font-semibold tracking-widest text-white transition-all hover:translate-y-1 disabled:opacity-60 disabled:hover:cursor-not-allowed sm:w-52 sm:py-4 sm:text-base"
            >
              {loading ? <Loader width="w-4" height="h-4" /> : "GET CARD"}
            </button>
          </div>
        </form>
      )}
    </main>
  );
}
