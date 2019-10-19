import React, { useState } from 'react';

const useDropdown = (label, defaultState, options) => {
  const [state, updateState] = useState(defaultState);
  const id = `dropdown-${label.replace(' ', '').toLowerCase()}`;
  const Dropdown = () => (
    <div className="dropdown">
      <label htmlFor={id}>
        {label}
        <select
          id={id}
          value={state}
          onChange={e => updateState(e.target.value)}
          onBlur={e => updateState(e.target.value)}
          disabled={!options.length}
        >
          <option>Select one</option>
          {// TODO: Use a model
          options.map(item => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
  return [state, Dropdown, updateState];
};

export default useDropdown;
