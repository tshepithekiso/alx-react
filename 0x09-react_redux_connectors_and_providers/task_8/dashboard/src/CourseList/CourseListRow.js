import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({ id, name, description, isChecked, onChangeRow }) => {
  const handleChange = (e) => {
    onChangeRow(id, e.target.checked);
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
      <td>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
      </td>
    </tr>
  );
};

CourseListRow.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onChangeRow: PropTypes.func.isRequired
};

export default CourseListRow;

