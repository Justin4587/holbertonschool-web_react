import { Map } from 'immutable';
import printBestStudents from './8-seq.js';

const grades = {
  1: {
    score: 99,
    firstName: 'guillaume',
    lastName: 'salva',
  },
  2: {
    score: 60,
    firstName: 'guilme',
    lastName: 'sal',
  },
  3: {
    score: 70,
    firstName: 'illaume',
    lastName: 'alva',
  },
};

printBestStudents(grades);
