import React from 'react'

const FilterGroup = ({title, inputType = "checkbox", options = []}) => (
  <div className="filterGroup">
    <p className="filterGroup-title">{title}</p>

    <div className="filterGroup-options">
      {options.map((option, index ) => {
        const id = `${title} - ${index}`;
        return (
          <label key={id} className="filterGroup-options-option">
            <input
              type={inputType}
              id={id}
              name={title}
              value={option.value || option.text}
              className="filterGroup-options-option-input"
            />
            <span className="filterGroup-options-option__filter-label">
              {option.text}
            </span>
          </label>
        );
      })}
    </div>
  </div>
);

export default FilterGroup;