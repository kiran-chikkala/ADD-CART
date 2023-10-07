import React from "react";
import Navbar from "../components/Navbar";
import { Data } from "../components/Data";
import Products from "../components/Products";
const Home = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-center mt-2 py-4 text-3xl font-bold ">
        useContext and useReducer Store
      </h1>
      <div className="flex flex-col lg:grid lg:grid-cols-3">
        {Data.map((item) => (
          <Products key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
