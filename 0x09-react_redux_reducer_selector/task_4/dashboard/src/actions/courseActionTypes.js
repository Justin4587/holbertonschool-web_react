export const SELECT_COURSE = {
  type: 'SELECT_COURSE',
  index: ''
}

export const UNSELECT_COURSE = {
  type: 'UNSELECT_COURSE',
  index: ''
}

export const FETCH_COURSE_SUCCESS = {
  type: 'FETCH_COURSE_SUCCESS',
  data: [
    {
      id: 0,
      name: '',
      isSelected: false,
      credit: 0
    }
  ]
}
