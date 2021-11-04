import React from "react";
import { connect } from "react-redux";
import { buyCakeAction } from "../redux/cake/cakeActions";
import { buyIceCream } from "../redux/iceCream/iceCreamActions";

const ItemContainerComponent = (props) => {
  return (
    <div>
      <h1>
        {props.productType} - {props.countToDisplay}
      </h1>
      <button onClick={props.buyItems}>Buy {props.productType}</button>
    </div>
  );
};

const mapStateToProps = (appState, ownProps) => {
  const countToDisplay = ownProps.cake
    ? appState.cake.numOfCake
    : appState.icecream.numOfIceCream;
  const productType = ownProps.cake ? `Cake` : `Ice-Cream`;
  return {
    countToDisplay: countToDisplay,
    productType: productType,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchType = ownProps.cake
    ? () => dispatch(buyCakeAction())
    : () => dispatch(buyIceCream());
  return {
    buyItems: dispatchType,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemContainerComponent);
