import accessImmutableObject from './2-nested.js';


const info = accessImmutableObject({
  name: {
    first: "Guillaume",
    last: "Salva"
  }
}, ['name', 'first']);

console.log(info)
