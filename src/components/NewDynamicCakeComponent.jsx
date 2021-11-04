import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCakeAction } from "../redux/cake/cakeActions";

const NewDynamicCakeComponent = (props) => {
  const [inputNum, setInputNum] = useState(1);
  return (
    <div>
      <h2>Number Of Cakes : {props.numOfCakes}</h2>
      <input
        type="text"
        value={inputNum}
        onChange={(e) => {
          setInputNum(e.target.value);
        }}
      />
      <button
        onClick={() => {
          props.buyCakeFromProps(inputNum);
        }}
      >
        Buy {inputNum} Cake
      </button>
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
    buyCakeFromProps: (inputNum) => {
      dispatch(buyCakeAction(inputNum));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewDynamicCakeComponent);
