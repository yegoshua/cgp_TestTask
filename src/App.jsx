import "./App.css";
import { useState } from "react";
import Toolbar from "./components/Toolbar";
import Board from "./components/Board";
import Render from "./components/Render";
import Header from "./components/Header";
import { nanoid } from "nanoid";

function App() {
  const [elements, setElements] = useState([]);
  return (
    <div className="">
      <Header />
      <div className="flex app-container">
        <Toolbar elements={elements} setElements={setElements} />
        <Board elements={elements} setElements={setElements} />
        <Render elements={elements} />
      </div>
    </div>
  );
}

export default App;
