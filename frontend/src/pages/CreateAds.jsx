import React from "react";
import TextMediaCards from "../atoms/TextMediaCards";
import text from "../../src/Img/text.png";
import media from "../../src/Img/media.png";

export default function CreateAds() {
  return (
    <div className="bg-[#fafafa] p-[15px] md:p-[35px]">
      <div className=" flex flex-col md:flex-row justify-center items-center gap-7 ">
        <TextMediaCards img={text} subheading="Create" heading="Text Ad" />
        <TextMediaCards img={media} subheading="Create" heading="Media Ad" />
      </div>
      <div className="flex flex-col md:flex-row justify-end items-end gap-5 m-5">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 font-small md:font-medium  rounded-sm text-lg px-7 md:px-10 py-2 "
        >
          Next
        </button>
      </div>
    </div>
  );
}
