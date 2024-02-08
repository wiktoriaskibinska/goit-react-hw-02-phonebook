import React from 'react';

const Filter = ({ onFilterChange, filter }) => {
  return (
    <div>
      <label>
        Find contacts by Name
        <input value={filter} type="text" onChange={onFilterChange}></input>
      </label>
    </div>
  );
};
export default Filter;
