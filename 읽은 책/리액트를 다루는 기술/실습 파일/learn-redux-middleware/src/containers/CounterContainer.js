import React from "react";
import { connect } from "react-redux";
import { increaseAsync, decreaseAsync } from "../modules/counter";
import Counter from "../components/Counter";

const CounterContainer = ({ number, increaseAsync, decreaseAsync }) => {
  return (
    <Counter
      number={number}
      onIncrease={increaseAsync}
      onDecrease={decreaseAsync}
    />
  );
};

const mapStateToProps = (state) => ({
  number: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  increaseAsync: () => dispatch(increaseAsync()),
  decreaseAsync: () => dispatch(decreaseAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
