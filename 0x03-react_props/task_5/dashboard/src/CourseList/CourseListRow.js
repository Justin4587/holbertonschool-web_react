import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
  return (
    <tr>{
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
  textSecondCell: PropTypes.string
};

export default CourseListRow;
