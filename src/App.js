import Header from './Component/Header';
import Checkout from './Component/Checkout';
import Item from './Component/Item';
import './App.css';
import {useState} from 'react';
import apple from './../public/apple.jpg';
import milk from './../public/milk.jpg';

let PRODUCTS = [
  {
    name: "Apple",
    description: "Yellow Apple",
    price: 4.50,
    src: apple,
    quantity: 10,
    count: 0
  },
  {
    name: "Milk",
    description: "Soya Milk",
    price: 3.99,
    src: milk,
    quantity: 5,
    count: 0
  }
];

let storeIndex = [];
function App() {
  let items = [];
  let totalItem = 0;
  let subTotal = 0;
  const [products, setProduct] = useState(PRODUCTS);
  products.forEach((element,index) => {
    items.push(
      <Item
      key={element.name}
      name={element.name}
      description={element.description}
      src={element.src}
      price={element.price}
      quantity={element.quantity}
      removeProduct={removeProduct}
      index={index}
      // updateQuantity={updateQuantity}
      />
    );
    totalItem += element.quantity;
    subTotal += element.quantity * element.price;
  });

  function removeProduct(para) {
    storeIndex.push(para);
    function check(obj) {
      obj.count = 0;
      storeIndex.forEach(item => {
        if (item !== obj.name) obj.count ++;
      });
      return obj.count === storeIndex.length;
    }
    setProduct(
      PRODUCTS.filter(check)
    );
  }

  // function updateQuantity(para) {
  //   let ipUpdate = document.getElementsByTagName('input')[para];
  //   console.log(ipUpdate);
  //   console.log(ipUpdate.value);
  //   PRODUCTS.forEach(item => {
  //     if (item.index === para) {
  //       item.quantity = parseInt(ipUpdate.value)
  //     }
  //   });
  //   setProduct(
  //     PRODUCTS
  //   );
  // }

  return (
    <div>
      <Header totalItems = {totalItem}/>
      <section className="container">
        <ul className="products">{items}</ul>
      </section>
      <Checkout subTotal = {subTotal}/>
      <button type="button" onClick= {removeProduct}>Fake remove</button>
    </div>
  );

}

export default App;
