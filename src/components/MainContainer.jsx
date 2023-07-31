import React, { useEffect, useState } from "react";
import HomeContainer from "./HomeContainer";

import { useStateValue } from "../context/StateProvider";
import MenuContainer from "./MenuContainer";
import Dashboard from "./Dashboard";
import Dashboard2 from "./Board";

const MainContainer = () => {
  const [{ foodItems, cartShow }] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {}, [scrollValue, cartShow]);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center ">
      <HomeContainer />

      <section className="w-full my-6">

      <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
            Dashboard
          </p>
        </div>
        <Dashboard2 />

        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
            Transactions
          </p>
        </div>

        <Dashboard />
    
      </section>

      <MenuContainer />
      
    </div>
  );
};
export default MainContainer;
