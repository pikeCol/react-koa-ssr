import React from "react";
import { connect } from "react-redux";
const List = (props) => (
  <ul>
    {props.list.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);
function mapStateTpProps(state) {
  console.log(state);

  return { list: state.list };
}

export default connect(mapStateTpProps)(List);
