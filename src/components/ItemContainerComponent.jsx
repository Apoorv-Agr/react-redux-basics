import React from "react";
import { connect } from "react-redux";

const ItemContainerComponent = (props) => {
  return (
    <div>
      <h1>
        {props.productType} - {props.countToDisplay}
      </h1>
    </div>
  );
};

const mapStateToProps = (appState, ownProps) => {
  const countToDisplay = ownProps.cake
    ? appState.cake.numOfCake
    : appState.icecream.numOfIceCream;
  const productType = ownProps.cake ? `Cake` : `Ice-Cream`;
  return {
    countToDisplay,
    productType,
  };
};

export default connect(mapStateToProps)(ItemContainerComponent);
