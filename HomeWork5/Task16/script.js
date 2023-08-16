const students = [
  { name: "Ян", averageGrade: 75 },
  { name: "Юрій", averageGrade: 82 },
  { name: "Андрій", averageGrade: 90 },
  { name: "Юлія", averageGrade: 88 },
];

const studentList = document.getElementById("student-list");

function displayStudents() {
  studentList.innerHTML = "";

  students.forEach((student) => {
    const li = document.createElement("li");
    li.textContent = `${student.name}: середній бал - ${student.averageGrade}`;
    studentList.appendChild(li);
  });
}

const increasedGradeStudents = students.map((student) => ({
  ...student,
  averageGrade: student.averageGrade + 5,
}));

displayStudents();
