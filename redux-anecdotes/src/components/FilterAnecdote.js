import React from "react";
import { connect } from "react-redux";
import { addFilter } from "../reducers/filterReducer";

const Filter = (props) => {
  const handleChange = (e) => {
    const filterText = e.target.value;
    props.addFilter(filterText);
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};

export default connect(null, { addFilter })(Filter);
