import React from "react";
import InputFields from "../atoms/InputFields";
import InputFieldTextarea from "../atoms/InputFieldTextarea";
import InputFieldDropdown from "../atoms/InputFieldDropdown";

export default function FormForText() {
  return (
    <div
      style={{
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#E0E0E0",
        borderRadius: "8px",
        width: "100%",
        background: "white",
      }}
      className="flex flex-col gap-3 p-[15px] md:p-[25px]"
    >
      <h3 className="text-[#36404a] text-[18px] text-base font-sans font-semibold ">
        Create Text & Media
      </h3>
      <div className="flex flex-col md:flex-row justify-between w-full gap-5">
        <div className="flex flex-col justify-between gap-3 w-full">
          <InputFields
            heading="Heading 01"
            placeholder="Add a heading that would make users interested"
          />
          <InputFields
            heading="Heading 01"
            placeholder="Add a heading that would make users interested"
          />
        </div>
        <InputFieldTextarea
          heading="Description"
          placeholder="Add primary text to help users understand more about your products"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between w-full gap-5 ">
        <InputFields
          heading="Business Name"
          placeholder="Add your business Name"
        />
        <InputFieldDropdown
          heading="Button Lable"
          placeholder="Select a lable that best suits your ad "
        />
      </div>
      <InputFields
        heading="Website URL"
        placeholder="Add the URL of the landing page you want to redirect useres to"
      />
      <div className="flex flex-col md:flex-row justify-end gap-5 m-5">
        <button
          type="button"
          className="text-gray-900 bg-white border border-gray-300 font-small md:font-medium rounded-sm text-lg px-7 md:px-10 py-2"
        >
          Back
        </button>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 font-small md:font-medium  rounded-sm text-lg px-7 md:px-10 py-2 "
        >
          Submit
        </button>
      </div>
    </div>
  );
}
