/* eslint-disable react/prop-types */
import React from 'react';

const FilterInput = (props) => {
  const { setFilter } = props;

  return (
    <div id="inputContainer">
      <input id="input" onChange={(e) => setFilter(e.target.value)} />
    </div>
  );
};

export default FilterInput;
