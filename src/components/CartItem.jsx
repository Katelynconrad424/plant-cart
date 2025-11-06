export default function CartItem(props) {
  function handleMinus() {
    props.updateQuantity(props.item.id, -1);
  }

  function handlePlus() {
    props.updateQuantity(props.item.id, 1);
  }

  return (
    <div className="cart-item">
      <span className="emoji">{props.item.image}</span>
      <span>{props.item.name}</span>
      <span>Qty: {props.item.quantity}</span>
      <button onClick={handleMinus}>-</button>
      <button onClick={handlePlus}>+</button>
    </div>
  );
}
