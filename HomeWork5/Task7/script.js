const user = {
  name: "Yan",
  year: 29,
  email: "yanyanyan623@gmail.com",
};
const { name, year, email } = user;
document.getElementById("output").innerHTML = `
  <p>Name: ${name}</p>
  <p>Year: ${year}</p>
  <p>Email: ${email}</p>
`;
