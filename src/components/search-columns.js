import React from 'react';
import PropTypes from 'prop-types';

function renderCheckbox(column) {
  return column && column.property && column.checkbox ?
    <input
      type="checkbox"
      className="column-filter-input"
      name={column.property}
    /> :
    '';
}

function renderText(column) {
  return column && column.property && !column.checkbox ?
    <input
      onChange={onQueryChange}
      className="column-filter-input"
      name={column.property}
      placeholder={column.filterPlaceholder || ''}
      value={query[column.property] || ''}
    /> :
    '';
}

const SearchColumns = ({ columns, query, onChange }) => {
  const onQueryChange = (event) => {
    onChange({
      ...query,
      [event.target.name]: event.target.value
    });
  };

  return (
    <tr>
      {columns.map((column, i) => (
        <th key={`${column.property || i}-column-filter`} className="column-filter">
          {renderCheckbox(column)}
          {renderText(column)}
        </th>
      ))}
    </tr>
  );
};

SearchColumns.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
  query: PropTypes.object
};

SearchColumns.defaultProps = {
  query: {}
};

  export default SearchColumns;
