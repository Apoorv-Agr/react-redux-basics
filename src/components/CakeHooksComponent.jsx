import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { buyCakeAction } from "../redux/cake/cakeActions";

const CakeHooksComponent = () => {
  const numOfCakes = useSelector((appState) => {
    return appState.cake.numOfCake;
  });
  const dispatch = useDispatch();
  const buyCake = () => {
    dispatch(buyCakeAction());
  };
  return (
    <div>
      <h2>Number Of Cakes : {numOfCakes}</h2>
      <button onClick={buyCake}>Buy Cake</button>
    </div>
  );
};

export default CakeHooksComponent;
