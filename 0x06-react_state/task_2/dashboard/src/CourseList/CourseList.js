import React from 'react';
import CourseListRow from "./CourseListRow";
// import './CourseList.css';
import { StyleSheet, css } from 'aphrodite';
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';


function CourseList({ listCourses }) {
  return (
    <table id='CourseList' className={css(styles.courseList)} >
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell='Credit' isHeader={true} />
      </thead>
      <tbody>
        {(listCourses.length === 0) && (
          <CourseListRow textFirstCell="No course available yet" isHeader={false} />
        )}
        {listCourses.map((list) => (
          <CourseListRow key={list.id} textFirstCell={list.name} textSecondCell={list.credit} isHeader={false} />
        ))}
      </tbody>
    </table>
  )
}

const styles = StyleSheet.create({
  courseList: {
    border: '1px solid gray',
    width: '80%',
    margin: 'auto',
  }
})

CourseList.defaultProps = {
  listCourses: [],
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

export default CourseList;
