export default function PlantItem(props) {
  function handleClick() {
    props.addToCart(props.plant);
  }

  return (
    <div className="plant-item">
      <span className="emoji">{props.plant.image}</span>
      <span>{props.plant.name}</span>
      <button onClick={handleClick}>Add to Cart</button>
    </div>
  );
}
