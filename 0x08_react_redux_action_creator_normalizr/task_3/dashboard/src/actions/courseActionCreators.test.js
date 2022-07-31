import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { selectCourse, unSelectCourse } from './courseActionCreators';

describe('courseActionCreators', () => {
  it('should', () => {
    const courseActionCreators = selectCourse(5);
    expect(courseActionCreators).toEqual({type: SELECT_COURSE, index: 5});
  })

  it('should', () => {
    const courseActionCreators = unSelectCourse(5);
    expect(courseActionCreators).toEqual({ type: UNSELECT_COURSE, index: 5 });
  })
})
