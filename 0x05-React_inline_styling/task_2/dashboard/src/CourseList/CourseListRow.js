import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';



function CourseListRow({ isHeader = false, textFirstCell, textSecondCell = null }) {
  const row = { backgroundColor: '#f5f5f5' };
  const head = { backgroundColor: '#deb5b5' };
  const type = css( isHeader ? styles.list : styles.data );

  return (
    <tr style={
      isHeader
        ? head
        : row
    }>{
      (isHeader) ? (
        (textSecondCell === null) ?
          (<th className={css(styles.header)} colSpan='2'>{textFirstCell}</th>) :
            (<Fragment>
              <th className={type}>{textFirstCell}</th>
              <th className={type}>{textSecondCell}</th>
            </Fragment>)
            ):
              (<Fragment>
                <td className={type}>{textFirstCell}</td>
                <td className={type}>{textSecondCell}</td>
              </Fragment>)

      }</tr>
  )
};

const styles = StyleSheet.create({
  list: {
    width: '80%',
    border: '1px solid gray',
  },

  header: {
    textAlign: 'center',
  },

  data: {
    textAlign: 'left',
  },
});

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default CourseListRow;
