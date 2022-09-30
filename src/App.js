import "./App.css";
import ColorCard from "./components/ColorCard/ColorCard";
import ColorForm from "./components/ColorForm/ColorForm";
import colorsArray from "./data/colors";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

function App() {
  const [colors, setColors] = useState(
    JSON.parse(localStorage.getItem("colors")) || colorsArray
  );

  useEffect(
    () => localStorage.setItem("colors", JSON.stringify(colors)),
    [colors]
  );

  function addColor(color) {
    setColors([...colors, { colorCode: color, id: nanoid() }]);
  }
  function changeColor(id, newColor) {
    setColors(
      colors.map((color) =>
        color.id === id ? { ...color, colorCode: newColor } : color
      )
    );
  }

  function deleteColor(id) {
    setColors(colors.filter((color) => color.id !== id));
  }
  return (
    <div className="App">
      <ColorForm addColor={addColor} />
      <ul className="card-list">
        {colors.map((color) => (
          <ColorCard
            key={color.id}
            id={color.id}
            colorCode={color.colorCode}
            changeColor={changeColor}
            deleteColor={deleteColor}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
