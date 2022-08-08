import { normalize, schema } from 'normalizr';

const corNor = new schema.Entity("courses");

export default function coursesNormailzer(data) {
  return normalize(data, [corNor]);
}
