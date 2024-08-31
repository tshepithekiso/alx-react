import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';
import { getListCourses } from '../selectors/courseSelector';
import CourseListRow from './CourseListRow';

class CourseList extends Component {
  static propTypes = {
    fetchCourses: PropTypes.func.isRequired,
    selectCourse: PropTypes.func.isRequired,
    unSelectCourse: PropTypes.func.isRequired,
    courses: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.fetchCourses();
  }

  onChangeRow = (id, checked) => {
    if (checked) {
      this.props.selectCourse(id);
    } else {
      this.props.unSelectCourse(id);
    }
  };

  render() {
    const { courses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Description</th>
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <CourseListRow
              key={course.id}
              id={course.id}
              name={course.name}
              description={course.description}
              isChecked={course.isSelected} // Pass the checked state
              onChangeRow={this.onChangeRow}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  courses: getListCourses(state)
});

const mapDispatchToProps = {
  fetchCourses,
  selectCourse,
  unSelectCourse
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);

