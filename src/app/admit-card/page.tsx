"use client";
import {
  Input,
  Loader,
  AdmitCard,
  PrintableAdmitCard,
  OtpTimer,
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
  const [resendAvailable, setResendAvailable] = useState<boolean>(false);
  const [data, setData] = useState<IAdmitCard>();

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

      // console.log("formData", formData);

      const res = await fetch("/api/admitcard", {
        body: JSON.stringify({ email: formData.email.toLowerCase() }),
        method: "POST",
      });
      const data = await res.json();
      if (
        data.message === "User not found" ||
        data.message === "Add your credentials"
      ) {
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

  const sendOTP = async () => {
    const email = watch("email");
    if (errors.email || !email) return;
    setResendAvailable(true);

    const sleep = () => new Promise((resolve) => setTimeout(resolve, 2500));
    await sleep();
    toast({
      title: `OTP Sent`,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    console.log(email);
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
            className="mx-8 mt-5 w-full bg-main py-3 text-center text-sm font-semibold tracking-widest text-white transition-all hover:translate-y-1 print:hidden sm:w-52 sm:py-4 sm:text-base"
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
          <Input
            type="email"
            id="email"
            placeholder="Email"
            required={true}
            register={register}
            errors={errors}
          />

          {/* <div className="my-6">
            <label
              htmlFor="email"
              className="mb-6 mt-4 text-slate-700 md:text-xl"
            >
              Email *
            </label>

            <div className="mb-2 mt-1 flex">
              <input
                type="email"
                id="email"
                className={`block h-12 w-full border border-gray-400 bg-gray-100 p-3 ${
                  errors?.email
                    ? "border-red-400 ring-red-500"
                    : "focus:border-sub focus:ring-sub"
                } rounded-l outline-none focus:ring-1 md:text-xl`}
                // {id === "phoneNumber" ? "rounded-r" : "mb-2 rounded"} mt-1
                placeholder="Email"
                {...register("email")}
              />
              <button
                type="button"
                onClick={sendOTP}
                disabled={resendAvailable}
                className="w-[30%] rounded-r text-xs xs:text-base bg-main text-white disabled:opacity-60 disabled:hover:cursor-not-allowed"
              >
                {resendAvailable ? (
                  <>
                    <span>Resend OTP</span>
                    <OtpTimer
                      duration={30}
                      func={() => setResendAvailable(false)}
                    />
                  </>
                ) : (
                  <span>Send OTP</span>
                )}
              </button>
            </div>

            {errors?.email && (
              <p className="mb-4 text-red-400">{errors?.email?.message}</p>
            )}
          </div>

          <Input
            type="tel"
            id="otp"
            placeholder="OTP"
            required={true}
            register={register}
            errors={errors}
          /> */}
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
