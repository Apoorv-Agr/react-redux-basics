import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { buyIceCream } from "../redux/iceCream/iceCreamActions";

const IceCreamHooksComp = () => {
  const numOfIceCreams = useSelector((appState) => {
    return appState.icecream.numOfIceCream;
  });
  const dispatch = useDispatch();
  const buyIceCreamFn = () => {
    dispatch(buyIceCream());
  };
  return (
    <div>
      <h2>Number Of Cakes : {numOfIceCreams}</h2>
      <button onClick={buyIceCreamFn}>Buy Cake</button>
    </div>
  );
};

export default IceCreamHooksComp;
