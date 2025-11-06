//
// All of these types of comments are my notes from the Demo,
// tried to go off of the demo because i got stuck on a lot of things
//
import { useState } from "react";
import PLANTS from "./data";
import PlantList from "./components/PlantList";
import Cart from "./components/Cart";

export default function App() {
  // this keeps track of what’s in the cart
  const [cart, setCart] = useState([]);

  // this adds a plant to the cart
  function addToCart(plant) {
    // setCart changes the cart
    setCart(function (oldCart) {
      // see if the plant is already in the cart
      const foundPlant = oldCart.find(function (item) {
        return item.id === plant.id;
      });

      // if plant is already there, increase quantity
      if (foundPlant) {
        return oldCart.map(function (item) {
          if (item.id === plant.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        // if not in the cart yet, add it with quantity 1
        return [...oldCart, { ...plant, quantity: 1 }];
      }
    });
  }

  // this changes how many of each plant you have
  function updateQuantity(id, amount) {
    setCart(function (oldCart) {
      return (
        oldCart
          .map(function (item) {
            if (item.id === id) {
              return { ...item, quantity: item.quantity + amount };
            } else {
              return item;
            }
          })
          // remove if quantity is 0 or less
          .filter(function (item) {
            return item.quantity > 0;
          })
      );
    });
  }

  return (
    <div className="app">
      <h1>🌱 Plant Shop</h1>
      <PlantList plants={PLANTS} addToCart={addToCart} />
      <Cart cart={cart} updateQuantity={updateQuantity} />
    </div>
  );
}
