import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';


function dispatch(event) {
  return event;
}

export const selectCourse = (index) => {
  return dispatch({
    type: SELECT_COURSE,
    index: index
  })
}

export const unSelectCourse = (index) => {
  return dispatch({
    type: UNSELECT_COURSE,
    index: index
  })
}
