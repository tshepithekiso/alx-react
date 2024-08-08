import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class CourseListRow extends Component {
  render() {
    const { isHeader, textFirstCell, textSecondCell } = this.props;
    const rowStyle = isHeader ? styles.headerRow : styles.defaultRow;

    return (
      <tr className={css(rowStyle)}>
        {isHeader ? (
          textSecondCell === null ? (
            <th colSpan="2" className={css(styles.th)}>
              {textFirstCell}
            </th>
          ) : (
            <>
              <th className={css(styles.th)}>{textFirstCell}</th>
              <th className={css(styles.th)}>{textSecondCell}</th>
            </>
          )
        ) : (
          <>
            <td>{textFirstCell}</td>
            <td>{textSecondCell}</td>
          </>
        )}
      </tr>
    );
  }
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

const styles = StyleSheet.create({
  defaultRow: {
    backgroundColor: '#f5f5f5ab',
  },
  headerRow: {
    backgroundColor: '#deb5b545',
  },
  th: {
    borderBottom: '1px solid black',
    textAlign: 'left',
    padding: '10px',
  },
});

export default CourseListRow;

