import React, { useState } from "react";
// import faker from 'faker'
import { faker } from "@faker-js/faker";
import SingleProduct from "./SingleProduct";

const Home = () => {
  // const prodcutArray = [...Array(20)].map(()=>({
  //   id : faker.datatype.uuid(),
  //   name: faker.commerce.productName(),
  //   price: faker.commerce.price(),
  //   // image: faker.image.business()
  //   image: faker.image.business()
  // }))

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "test",
      price: 100,
      image:
        "https://cdn.thewirecutter.com/wp-content/media/2021/08/budget-android-phone-2048px-nord-front.jpg",
    },
    {
      id: 2,
      name: "Iphone 13",
      price: 1500,
      image:
        "https://media.4rgos.it/s/Argos/9520608_R_SET?$Main768$&w=620&h=620",
    },
    {
      id: 3,
      name: "OUKITEL",
      price: 2000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiNeDtLQtXO5TUliuC8OBDEufkPK2531P5YsF-AhmmoFdL-xPgtejTCuonRUyKzNKYBj8&usqp=CAU",
    },
  ]);
  const [cart, setCart] = useState([])
  console.log(cart)
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <SingleProduct key={product.id} product={product} cart={cart} setCart={setCart} />
      ))}
    </div>
  );
};

export default Home;
