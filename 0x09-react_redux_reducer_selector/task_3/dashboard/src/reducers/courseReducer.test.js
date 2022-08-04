
import courseReducer from './courseReducer';
import { fetchCourseSuccess, selectCourse, unSelectCourse } from '../actions/courseActionCreators';

const falseList = [
  {
    id: 1,
    name: "ES6",
    isSelected: false,
    credit: 60
  },
  {
    id: 2,
    name: "Webpack",
    isSelected: false,
    credit: 20
  },
  {
    id: 3,
    name: "React",
    isSelected: false,
    credit: 40
  }
];

const oneTrueList = [
  {
    id: 1,
    name: "ES6",
    isSelected: true,
    credit: 60
  },
  {
    id: 2,
    name: "Webpack",
    isSelected: false,
    credit: 20
  },
  {
    id: 3,
    name: "React",
    isSelected: false,
    credit: 40
  }
];

describe('courseReducer', () => {
  it('verifies empty array', () => {
    const res = courseReducer(undefined, 'no_action');
    expect(res).toEqual([]);
  });

  it('returns data passed', () => {
    const res = courseReducer([], fetchCourseSuccess(oneTrueList));
    expect(res).toEqual(falseList);
  });

  it('isSelected as true', () => {
    const res = courseReducer(falseList, selectCourse(1));
    expect(res).toEqual(oneTrueList);
  });

  it('isSelected as false', () => {
    const res = courseReducer(oneTrueList, unSelectCourse(1));
    expect(res).toEqual(falseList);
  });
});
