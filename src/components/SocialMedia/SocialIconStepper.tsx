"use client";
import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Box,
} from "@chakra-ui/react";
import { socialLinks } from "@/data";
import { type Dispatch, type SetStateAction } from "react";

export default function SocialIconStepper({
  currentStep,
  setCurrentStep,
}: {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
}) {
  console.log("🚀 ~ file: SocialIconStepper.tsx:25 ~ currentStep:", currentStep)
  const { activeStep } = useSteps({
    index: currentStep,
    count: socialLinks.length,
  });
  console.log("🚀 ~ file: SocialIconStepper.tsx:30 ~ activeStep:", activeStep)

  return (
    <Stepper index={currentStep}>
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
      <Step>
        <StepIndicator>
          <StepStatus
            complete={<StepIcon />}
            incomplete={<StepNumber />}
            active={<StepNumber />}
          />
        </StepIndicator>

        <Box flexShrink="0">
          <StepTitle className="capitalize">Apply</StepTitle>
          {/* <StepDescription>{step.description}</StepDescription> */}
        </Box>

        <StepSeparator />
      </Step>
    </Stepper>
  );
}

// render(<Example />);
