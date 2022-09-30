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
    <form onSubmit={handleSubmit}>
      <input type="color" name="colorCode" />
      <input type="text" name="colorText" />
      <button type="submit">Add new color</button>
    </form>
  );
}
