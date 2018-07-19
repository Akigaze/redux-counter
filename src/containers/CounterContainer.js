import { connect } from "react-redux";
import Counter from "../components/Counter";
import { decreate, increate, multiple, reset } from "../actions/index";

const mapStateToProps = (state, ownProps) => {
  return {
    value: state[ownProps.id]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onIncrement: index => dispatch(increate(index)),
    onDecrement: index => dispatch(decreate(index)),
    onMultiple: (index, multipler) => dispatch(multiple(index, multipler)),
    onReset: index => dispatch(reset(index))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
