// https://youtu.be/tvEeNPy7OVA
"use client";
import { useForm } from "react-hook-form";
import { IApplyForm } from "@/types/interfaces";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

// import { useState } from "react";

// const qualifications = [
//   "Matric / O Levels",
//   "Intermediate / A Levels",
//   "Undergraduate (Bachelor's)",
//   "Graduate (Master's)",
//   "Post-Graduate (PhD)",
// ];

export default function ExperienceModal(props: {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  isControlled: boolean;
  getButtonProps: (props?: any) => any;
  getDisclosureProps: (props?: any) => any;
}) {
  // const { isOpen, onOpen, onClose } = useDisclosure()

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<IApplyForm>({
    defaultValues: {
      city: "Karachi",
    },
  });

  const onFormSubmit = (data: IApplyForm) => {
    console.log(data);
  };
  console.log(props);

  console.log("isOpen", isOpen, "onOpen", onOpen, "onClose", onClose);

  return (
    <div>
      {/* <h1>GIAIC</h1> */}
      {/* <form onSubmit={handleSubmit(onFormSubmit)} noValidate>
        <input type="text" placeholder="Full Name" {...register("fullName")} />
        <div className="red">{`${errors.fullName?.message}`}</div>
        <input
          type="email"
          placeholder="Email address"
          {...register("email")}
        />
        <input
          type="number"
          placeholder="Phone number"
          {...register("phoneNumber")}
        />
        <input type="number" placeholder="NIC number" {...register("CNIC")} />

        <select
          id="qualification"
          name="qualification"
          className="roundhighestQualificationed-lg mb-8 block w-full border border-gray-400 bg-gray-200 p-3  md:text-lg"
          required
        >
          {qualifications.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </select>
        <button type="submit">submit</button>
      </form> */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>

          <ModalFooter>
            <button
              // colorScheme='blue' mr={3}
              onClick={onClose}
            >
              Close
            </button>
            <button>Secondary Action</button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
