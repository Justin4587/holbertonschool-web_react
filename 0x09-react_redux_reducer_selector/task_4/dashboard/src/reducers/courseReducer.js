import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";
import { Map, setIn, merge } from 'immutable';
import coursesNormailzer from "../schema/courses";

const initialState = Map([]);


export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS: {
      const data = action.data.map((course) => {
        return {
          ...course,
          isSelected: false
        }
      })
      const dataNorm = coursesNormailzer(data);
      return state.merge(dataNorm);
    }
    case SELECT_COURSE: {
      return setIn(state,['entities', 'courses', action.index.toString(), 'isSelected'], true);
    }
    case UNSELECT_COURSE: {
      return setIn(state,['entities', 'courses', action.index.toString(), 'isSelected'], false);
    }
    default: return state;
  }
}
