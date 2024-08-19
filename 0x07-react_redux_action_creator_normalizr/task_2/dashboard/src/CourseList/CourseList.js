import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';

function CourseList({ listCourses }) {
  return (
    <table className={css(styles.courseList)}>
      <thead>
        <CourseListRow isHeader={true} textFirstCell="Available courses" />
        <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <CourseListRow textFirstCell="No course available yet" />
        ) : (
          listCourses.map((course) => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit}
            />
          ))
        )}
      </tbody>
    </table>
  );
}

const styles = StyleSheet.create({
  courseList: {
    width: '100%',
    border: '1px solid #ddd',
    margin: '20px 0',
  },
});

export default CourseList;

