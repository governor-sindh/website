"use client";
import {
  Step,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Box,
} from "@chakra-ui/react";
import { socialLinks } from "@/data";

export default function SocialIconStepper({
  activeStep,
}: {
  activeStep: number;
}) {
  const mainColor = "#044e83";

  return (
    <Stepper index={activeStep} className="w-[90%] lg:w-[800px] !justify-center mx-auto !flex-wrap" color={mainColor} colorScheme={mainColor}>
      {socialLinks.map((step) => (
        <Step key={step.id}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink="0">
            <StepTitle className="capitalize">{step.platform}</StepTitle>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
}
