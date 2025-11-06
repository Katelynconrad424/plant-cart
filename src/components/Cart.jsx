import CartItem from "./CartItem";

export default function Cart(props) {
  return (
    <div>
      <h2>Your Cart</h2>

      {props.cart.length === 0 ? (
        <p>No plants in your cart yet 🌵</p>
      ) : (
        props.cart.map(function (item) {
          return (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={props.updateQuantity}
            />
          );
        })
      )}
    </div>
  );
}
