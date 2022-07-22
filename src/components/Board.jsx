import React from "react";
import ElementBox from "./ElementBox";
import { nanoid } from "nanoid";

const Board = ({ elements, setElements }) => {
  function elementUp(element) {
    let index = null;
    elements.forEach((e, ind) => {
      if (e.id === element.id) {
        index = ind;
      }
    });
    if (index === 0) {
      console.log("Index is zero");
      return;
    }
    const elmntCpy = elements.map((e) => e);
    const tmp = elmntCpy[index];
    elmntCpy[index] = elmntCpy[index - 1];
    elmntCpy[index - 1] = tmp;
    setElements(elmntCpy);
  }

  function elementDown(element) {
    let index = null;
    elements.forEach((e, ind) => {
      if (e.id === element.id) {
        index = ind;
      }
    });
    if (index === elements.length - 1) {
      console.log("Index is zero");
      return;
    }
    const elmntCpy = elements.map((e) => e);
    const tmp = elmntCpy[index];
    elmntCpy[index] = elmntCpy[index + 1];
    elmntCpy[index + 1] = tmp;
    setElements(elmntCpy);
  }

  function deleteElement(element) {
    const filtred = elements.filter((e) => e.id !== element.id);
    setElements(filtred);
  }

  function duplicateElement(element) {
    setElements([...elements, { ...element, id: nanoid() }]);
  }

  function changeElementValue(element, input) {
    console.log("changeElementValue click");
    const elementCpy = elements.map((e) => e);
    elementCpy.forEach((e) => {
      if (e.id === element.id) {
        e.value = input;
      }
    });
    setElements(elementCpy);
  }

  function dropHandler(e) {
    e.preventDefault();
    const data = e.dataTransfer.getData("type");
    console.log(data);
    return data;
  }

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
    <div
      className="w-4/12 flex-col justify-start items-center p-12 bg-blue-100 bg-opacity-30 max-h-screen board"
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={(e) => {
        addElement(dropHandler(e));
      }}
    >
      {elements.map((el) => {
        return (
          <ElementBox
            key={el.id}
            element={el}
            setElements={setElements}
            elementUp={elementUp}
            elementDown={elementDown}
            deleteElement={deleteElement}
            duplicateElement={duplicateElement}
            changeElementValue={changeElementValue}
          ></ElementBox>
        );
      })}
    </div>
  );
};

export default Board;
