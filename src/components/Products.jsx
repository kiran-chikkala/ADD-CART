import { useContext } from "react";
import { StoreContext } from "../context-and-reducer/Context";

const Products = ({ item }) => {
  const { addToBasket } = useContext(StoreContext);
  const handleAdd = () => {
    addToBasket(item);
  };
  return (
    <div className=" rounded-lg mx-auto px-8 border border-grey-200">
      <img src={item.Image} />
      <div className="flex flex-row items-center justify-between">
        <div>
          <p>{item.name}</p>
          <p>{item.price}$</p>
        </div>
        <button className="bg-indigo-500 rounded px-2" onClick={handleAdd}>
          Add Item
        </button>
      </div>
    </div>
  );
};

export default Products;
