function displayInfo(student) {
  document.getElementById("studentName").textContent = "Ім'я: " + student.name;
  document.getElementById("studentAge").textContent = "Вік: " + student.age;
  document.getElementById("studentGroup").textContent =
    "Група: " + student.group;
}
var studentInfo = {
  name: "Rostyk",
  age: 19,
  group: "k-101",
};
displayInfo(studentInfo);
