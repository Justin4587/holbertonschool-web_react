import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
  const row = { backgroundColor: '#f5f5f5ab' };
  const head = { backgroundColor: '#deb5b545' };

  return (
    <tr style={
      isHeader
        ? row
        : head
    }>{
      (isHeader) ? (
        (textSecondCell === null) ?
          (<th colSpan='2'>{textFirstCell}</th>) :
            (<Fragment>
              <th>{textFirstCell}</th>
              <th>{textSecondCell}</th>
            </Fragment>)
            ):
              (<Fragment>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
              </Fragment>)

      }</tr>
  )
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default CourseListRow;
