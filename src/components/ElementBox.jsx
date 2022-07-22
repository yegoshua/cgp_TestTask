import React from "react";
import { useState } from "react";
import {
  HeadlineIcon,
  ParagraphIcon,
  ButtonIcon,
  ImageIcon,
  ArrowUp,
  ArrowDown,
  DeleteIcon,
  CopyIcon,
} from "../assets/icons";

const ElementBox = ({
  element,
  elementUp,
  elementDown,
  deleteElement,
  duplicateElement,
  changeElementValue,
}) => {
  const [actice, setActice] = useState(false);
  const [input, setInput] = useState("");
  const images = {
    image: <ImageIcon />,
    headline: <HeadlineIcon />,
    button: <ButtonIcon />,
    paragraph: <ParagraphIcon />,
  };

  return (
    <div>
      {actice && (
        <div className="flex justify-end mr-3">
          <div className="bg-blue-500 p-1 rounded-t-md mr-2">
            <button className="px-2" onClick={() => elementDown(element)}>
              <ArrowDown />
            </button>
            <button className="px-2" onClick={() => elementUp(element)}>
              <ArrowUp />
            </button>
          </div>
          <div className="p-1 rounded-t-md bg-sky-300">
            <button className="px-2" onClick={() => deleteElement(element)}>
              <DeleteIcon />
            </button>
            <button className="px-2" onClick={() => duplicateElement(element)}>
              <CopyIcon />
            </button>
          </div>
        </div>
      )}
      <div
        className={`flex flex-col items-center p-6 relative rounded-2xl cursor-pointer mb-5 transition-all hover:bg-blue-200 ${
          actice ? "bg-blue-200" : "bg-white"
        }`}
        onClick={(e) => {
          e.preventDefault();
          setActice((prevState) => !prevState);
        }}
      >
        <div>{images[element.type]}</div>
        <p>{element.type}</p>
        {actice && (
          <div className="w-full flex items-center mt-2">
            {element.type === "image" ? (
              <input
                className="w-full p-2 shadow-md rounded-md "
                type="text"
                placeholder="Enter conten for Element"
                value={input}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    changeElementValue(element, input);
                  }
                }}
              />
            ) : (
              <textarea
                className="w-full p-2 shadow-md rounded-md resize-none max-h-80 overflow-visible"
                placeholder="Enter conten for Element"
                value={input}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    changeElementValue(element, input);
                  }
                }}
              />
            )}

            <button
              className="ml-2 bg-white py-1 px-3 rounded-xl"
              onClick={() => changeElementValue(element, input)}
            >
              Confirm
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ElementBox;
