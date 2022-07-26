import { Seq } from 'immutable';

export default function printBestStudents(object) {
  const top30 = Seq(object).filter((upper) => upper.score >= 70)
    .map((upper) => ({
      score: upper.score,
      firstName: upper.firstName.charAt(0).toUpperCase() + upper.firstName.slice(1),
      lastName: upper.lastName.charAt(0).toUpperCase() + upper.lastName.slice(1),
      }),
    );

  console.log(top30.toObject());

}
