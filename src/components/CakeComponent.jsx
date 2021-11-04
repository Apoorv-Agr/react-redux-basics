import React from "react";

import { connect } from "react-redux";
import { buyCakeAction } from "../redux/cake/cakeActions";

const CakeComponent = (props) => {
  return (
    <div>
      <h2>Number Of Cakes : {props.numOfCakes}</h2>
      <button onClick={props.buyCakeFromProps}>Buy Cake</button>
    </div>
  );
};

const mapStateToProps = (appState) => {
  return {
    numOfCakes: appState.cake.numOfCake,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCakeFromProps: () => {
      dispatch(buyCakeAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeComponent);
