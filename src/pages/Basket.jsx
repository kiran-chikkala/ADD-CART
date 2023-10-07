import { useContext } from "react";
import Navbar from "../components/Navbar";
import { StoreContext } from "../context-and-reducer/Context";
import BasketProduct from "./BasketProduct";

const Basket = () => {
  const { products, total } = useContext(StoreContext);
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Navbar />
      <div className="flex flex-row items-center justify-between mt-2 py-6 px-18 text-xl">
        <h3>Your Basket</h3>
        <p>Total:${total}</p>
      </div>
      {products.map((product) => (
        <BasketProduct key={product.id} item={product} />
      ))}
    </div>
  );
};

export default Basket;
