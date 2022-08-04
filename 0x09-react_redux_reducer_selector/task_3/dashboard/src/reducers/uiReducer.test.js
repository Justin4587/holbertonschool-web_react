import { uiReducer, initialState } from './uiReducer';
import { selectCourse } from '../actions/courseActionCreators';
import { displayNotificationDrawer } from '../actions/uiActionCreators';


describe('Thing', () => {
  it('should create', () => {
    const state = uiReducer(initialState, '');
    console.log(state);
    console.log(initialState);
    expect(state.toJS()).toEqual(initialState.toJS());
  })

  it('should', () => {
    const state = uiReducer(initialState, selectCourse());
    console.log(state);
    console.log(initialState);
    expect(state.toJS()).toEqual(initialState.toJS());
  })

  it('should create', () => {
    const state = uiReducer(initialState, displayNotificationDrawer());
    console.log(state);
    console.log(initialState);
    expect(state.toJS().isNotificationDrawerVisible).toEqual(true)
  })
})

