import PlantItem from "./PlantItem";

export default function PlantList(props) {
  return (
    <div>
      <h2>All Plants</h2>
      <div className="plant-list">
        {props.plants.map(function (plant) {
          return (
            <PlantItem
              key={plant.id}
              plant={plant}
              addToCart={props.addToCart}
            />
          );
        })}
      </div>
    </div>
  );
}
