let students = [];

function createStudent(id, name, grades) {
  return {
    id,
    name,
    grades
  };
}

function addStudent(id, name, grades) {
  const newStudent = createStudent(id, name, grades);
  students.push(newStudent);
  console.log(`Student with id ${id} added successfully.`);
}

function removeStudent(id) {
  const index = students.findIndex(student => student.id === id);
  if (index !== -1) {
    students.splice(index, 1);
    console.log(`Student with id ${id} removed successfully.`);
  } else {
    console.log(`Student with id ${id} not found.`);
  }
}

addStudent(1, 'Dhoni', { math: 90, science: 85, english: 95 });
addStudent(2, 'Virat', { math: 80, science: 90, english: 85 });
addStudent(3, 'Rohit', { math: 95, science: 80, english: 90 });

console.log('All students:');
console.log(students);

removeStudent(2);

console.log('Students after removal:');
console.log(students);