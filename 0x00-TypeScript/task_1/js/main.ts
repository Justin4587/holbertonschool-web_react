interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
};
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

interface Directors extends Teacher {
  numberOfReports: number;
};

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
};

export const printTeacher: printTeacherFunction =
function (firstName: string, lastName: string): string {
  const first = firstName[0];
  const last = lastName;
  const name = first + ". " + last;
  return name; 
};

console.log(printTeacher("Mrs", "Previtt"));

interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

interface StudentConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}

export const StudentClass: StudentConstructor =
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this.firstName;
  }
}

const student: StudentClassInterface = new StudentClass('Justin', 'Thurman');
console.log(student.displayName());
console.log(student.workOnHomework());
console.log(teacher3);
export default printTeacher("John", "Doe");
