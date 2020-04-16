import React, { useState } from 'react';
import styled from 'styled-components';

const DropdownStyled = styled.div`
  select {
    margin-left: 1rem;
  }

  @media screen and (max-width: $phablet) {
    select {
      margin-left: 0;
    }
  }
`;

const useDropdown = (label, defaultState, options) => {
  const [state, updateState] = useState(defaultState);
  const id = `dropdown-${label.replace(' ', '').toLowerCase()}`;
  const Dropdown = () => (
    <DropdownStyled>
      <label htmlFor={id}>
        {label}
        <select
          id={id}
          value={state}
          onChange={(e) => updateState(e.target.value)}
          onBlur={(e) => updateState(e.target.value)}
          disabled={!options.length}
        >
          <option>Select one</option>
          {
            // TODO: Use a model
            options.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))
          }
        </select>
      </label>
    </DropdownStyled>
  );

  return [state, Dropdown, updateState];
};

export default useDropdown;
