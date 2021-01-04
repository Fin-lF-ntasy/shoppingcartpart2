function Checkout({subTotal}) {
  return (
    <section className="container">
      <div className="promotion">
        <label htmlFor="promo-code">Have A Promo Code ?</label>
        <input type="text" id="promo-code" /><button type="button"></button>
      </div>
      <div className="summary">
        <ul>
          <li>Subtotal <span>{subTotal.toFixed(2)}</span></li>
          <li>Tax <span>{(subTotal * 0.1).toFixed(2)}</span></li>
          <li className="total">Total <span>{(subTotal * 1.1).toFixed(2)}</span></li>
        </ul>
      </div>
      <div className="checkout">
        <button type="button">Checkout</button>
      </div>
    </section>
  );
}

export default Checkout;
