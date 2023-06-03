export const sendOTP = async () => {
    const email = watch("email");
    if (errors.email || !email) return;
    setResendOtpAvailable(true);
    try {
      console.log({ email });
      const res = await fetch("api/sendotp/", {
        body: JSON.stringify({ email }),
        method: "POST",
      });
      toast({
        title: `OTP Sent successfully`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (err) {
      console.log("err otp", err);
      toast({
        title: `OTP Sent`,
        status: "error",
        duration: 9000,
        isClosable: false,
      });
    }
  };