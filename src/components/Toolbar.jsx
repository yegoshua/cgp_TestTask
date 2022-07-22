import React from "react";
import { nanoid } from "nanoid";
import {
  HeadlineIcon,
  ParagraphIcon,
  ButtonIcon,
  ImageIcon,
} from "../assets/icons";

const Toolbar = ({ elements, setElements }) => {
  function addElement(type) {
    console.log(type);
    if (type === "image") {
      setElements([
        ...elements,
        {
          id: nanoid(),
          type: type,
          value: `https://icons-for-free.com/download-icon-gallery+image+landscape+mobile+museum+open+line+icon-1320183049020185924_512.png`,
        },
      ]);
    } else {
      setElements([
        ...elements,
        { id: nanoid(), type: type, value: `Enter your ${type}` },
      ]);
    }
  }

  return (
    <div className="w-2/12 border-gray-300 border-r-2 max-h-full p-4">
      <div className="grid grid-cols-2 grid-rows-2 h-1/4 gap-2 mt-8">
        <div
          className="flex items-center bg-blue-100 bg-opacity-30 justify-center flex-col cursor-pointer hover:bg-blue-200 transition-all rounded-lg"
          onClick={() => addElement("headline")}
          draggable={true}
          onDragStart={(e) => {
            e.dataTransfer.setData("type", "headline");
          }}
        >
          <HeadlineIcon />
          <p>Headline</p>
        </div>
        <div
          className="flex items-center bg-blue-100 bg-opacity-30 justify-center flex-col cursor-pointer hover:bg-blue-200 transition-all rounded-lg"
          onClick={() => addElement("paragraph")}
          draggable={true}
          onDragStart={(e) => {
            e.dataTransfer.setData("type", "paragraph");
          }}
        >
          <ParagraphIcon />
          <p>Paragraph</p>
        </div>
        <div
          className="flex items-center bg-blue-100 bg-opacity-30 justify-center flex-col cursor-pointer hover:bg-blue-200 transition-all rounded-lg"
          onClick={() => addElement("button")}
          draggable={true}
          onDragStart={(e) => {
            e.dataTransfer.setData("type", "button");
          }}
        >
          <ButtonIcon />
          <p>Button</p>
        </div>
        <div
          className="flex items-center bg-blue-100 bg-opacity-30 justify-center flex-col cursor-pointer hover:bg-blue-200 transition-all rounded-lg"
          onClick={() => addElement("image")}
          draggable={true}
          onDragStart={(e) => {
            e.dataTransfer.setData("type", "image");
          }}
        >
          <ImageIcon />
          <p>Image</p>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
