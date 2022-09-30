import "./ColorForm.css";

export default function ColorForm({ addColor }) {
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const values = Object.fromEntries(data);
    console.log(values);
    addColor(values.colorText || values.colorCode);
    e.target.elements.colorText.focus();
    e.target.reset();
  }
  return (
    <form className="ColorForm" onSubmit={handleSubmit}>
      <input type="color" name="colorCode" />
      <input
        type="text"
        name="colorText"
        placeholder="Type a valid hex code..."
      />
      <button className="submit-button" type="submit">
        Add new color
      </button>
    </form>
  );
}
