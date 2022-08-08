import { uiReducer, initialState } from './uiReducer';
import { selectCourse } from '../actions/courseActionCreators';
import { displayNotificationDrawer } from '../actions/uiActionCreators';


describe('Thing', () => {
  it('should create', () => {
    const state = uiReducer(initialState, '');
    console.log(state);
    console.log(initialState);
    expect(state).toEqual(initialState);
  })

  it('should', () => {
    const state = uiReducer(initialState, selectCourse());
    console.log(state);
    console.log(initialState);
    expect(state).toEqual(initialState);
  })

  it('should create', () => {
    const state = uiReducer(initialState, displayNotificationDrawer());
    console.log(state);
    console.log(initialState);
    expect(state.isNotificationDrawerVisible).toEqual(true)
  })
})

