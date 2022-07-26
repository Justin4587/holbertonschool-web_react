import { getListObject, addElementToList } from './3-list.js';

let list = getListObject(['thing', 'one', 'thing']);

// console.log(getListObject(['thing', 'one', 'thing']));
console.log(getListObject(list));
// console.log(addElementToList(['thing', 'one', 'thing'], 'two'));
console.log(addElementToList(list, 'two'));
