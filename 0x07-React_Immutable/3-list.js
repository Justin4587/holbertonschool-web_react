import pkg from 'immutable';
const { List } = pkg;

export function getListObject(array) {
  return List(array);
}

export function addElementToList(list, element) {
  return list.push(element);
}
