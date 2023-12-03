import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import TextMediaCards from "../atoms/TextMediaCards";
import text from "../../src/Img/text.png";
import media from "../../src/Img/media.png";

export default function CreateAds() {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [selectedCard, setSelectedCard] = useState(null);

  const handleNextClick = () => {
    // Check if a card is selected
    if (selectedCard === null) {
      alert("Please select a card before proceeding.");
      return;
    }

    // Navigate to the corresponding page
    if (selectedCard === "text") {
      navigate("/createads/textform");
    } else if (selectedCard === "media") {
      navigate("/createads/mediaform");
    }
  };

  return (
    <div className="bg-[#fafafa] p-[15px] md:p-[35px]">
      <div className="flex flex-col md:flex-row justify-center items-center gap-7 ">
        <TextMediaCards
          img={text}
          subheading="Create"
          heading="Text Ad"
          onSelect={() => setSelectedCard("text")}
          isSelected={selectedCard === "text"}
        />
        <TextMediaCards
          img={media}
          subheading="Create"
          heading="Media Ad"
          onSelect={() => setSelectedCard("media")}
          isSelected={selectedCard === "media"}
        />
      </div>
      <div className="flex flex-col md:flex-row justify-end items-end gap-5 m-5">
        <button
          type="button"
          onClick={handleNextClick}
          className="text-white bg-blue-700 hover:bg-blue-800 font-small md:font-medium  rounded-sm text-lg px-7 md:px-10 py-2"
        >
          Next
        </button>
      </div>
    </div>
  );
}
