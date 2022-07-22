import React from "react";

const Render = ({ elements }) => {
  return (
    <div className="w-6/12 flex flex-col justify-start items-center gap-4 p-12 max-h-screen render">
      {elements.map((el) => {
        //!can change to switch
        if (el.type === "image") {
          return <img className="w-5/12" src={el.value} alt={el.value} />;
        } else if (el.type === "headline") {
          return <h1 className="text-2xl font-bold">{el.value}</h1>;
        } else if (el.type === "paragraph") {
          return <p className="text-gray-400 p_Element">{el.value}</p>;
        } else if (el.type === "button") {
          return (
            <button className="bg-blue-500 text-white px-8 py-2 rounded-md flex items-center justify-center">
              {el.value}
            </button>
          );
        }
      })}
    </div>
  );
};

export default Render;
