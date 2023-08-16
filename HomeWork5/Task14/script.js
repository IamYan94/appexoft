const user = {
  firstName: "Yan",
  lastName: "Nikolaiyv",
  age: 29,
  email: "yanyanyan623@gmail.com",
};

user.age = 26;

const userInfoElement = document.getElementById("user-info");
userInfoElement.innerHTML = `
    <p>Ім'я:</p> ${user.firstName} <br>
    <p>Прізвище:</p> ${user.lastName} <br>
    <p>Вік:</p> ${user.age} <br>
    <p>Email:</p> ${user.email}
`;
