import { useEffect, useState } from "react";
import "./ColorCard.css";

export default function ColorCard({ id, colorCode, changeColor, deleteColor }) {
  const [colorName, setColorName] = useState(colorCode);
  const [isChanging, setIsChanging] = useState(false);

  async function fetchColors(code) {
    const response = await fetch(
      `https://www.thecolorapi.com/id?hex=${code.substring(1)}`
    );
    const data = await response.json();
    setColorName(data.name.value);
  }

  useEffect(() => {
    fetchColors(colorCode);
  }, []);

  function handleDelete(e) {
    e.stopPropagation();
    deleteColor(id);
  }

  function handleChange(e) {
    e.stopPropagation();
    changeColor(id, e.target.value);
    fetchColors(e.target.value);
    setIsChanging(false);
  }

  function showChangeInput(e) {
    e.stopPropagation();
    setIsChanging(true);
  }
  return (
    <li
      className="ColorCard"
      onClick={() => navigator.clipboard.writeText(colorCode)}
    >
      <div className="color-container" style={{ backgroundColor: colorCode }}>
        {isChanging ? <input type="color" onInput={handleChange} /> : ""}
        <span className="color-title">{colorName ?? colorCode}</span>
        <span className="color-title" onClick={showChangeInput}>
          {colorCode}
        </span>
        <button className="delete-button" onClick={handleDelete}>
          &#10005;
        </button>
      </div>
    </li>
  );
}
