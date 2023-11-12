import React from 'react';

const Filter = ({ value, onChange }) => (
  <div>
    <label htmlFor="filter">Find contacts by name</label>
    <input
      type="text"
      id="filter"
      name="filter"
      value={value}
      onChange={onChange}
    />
  </div>
);

export default Filter;