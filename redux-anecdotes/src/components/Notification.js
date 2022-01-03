import React from "react";
import { connect } from "react-redux";

const Notification = (props) => {
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };
  const message = props.message;
  return message === "No notification" ? null : (
    <div style={style}>{message}</div>
  );
};
const mapStateToProps = (state) => ({ message: state.message });

export default connect(mapStateToProps, null)(Notification);
