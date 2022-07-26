import { concatElements, mergeElements } from "./5-merge.js";

const thing1 = ['thing', 'one'];
const thing2 = ['thing', 'two'];

const obj1 = {1: 'thing', 2: 'one'};
const obj2 = {1: 'thing', 2: 'one'};

// console.log(concatElements(thing1, thing2));
// console.log(mergeElements(obj1, obj2));

// console.log(concatElements(thing1, thing2), concatElements(thing1, thing2).toJS());
// console.log(mergeElements(obj1, obj2), mergeElements(obj1, obj2).toJS());

const things = concatElements(thing1, thing2);
const objs = mergeElements(obj1, obj2);
console.log(things.toJS());
console.log(objs.toJS());

console.log(things);
console.log(objs);
