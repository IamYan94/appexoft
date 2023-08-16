// function getData(data, callback) {
//   if (data) {
//     const result = callback(data);
//     return result;
//   } else {
//     return "no data try again";
//   }
// }
// function stringLenght(str) {
//   return str.Length;
// }
// const input = " i am  cu";
// const Length = getData(input, stringLenght);
// console.log("String,Length", Length);

// const numbers = [1, 4, 10, 111, 343, 646, 243, 2, 3, 5];
// const doubleNumbers = numbers.map((num) => {
//   return num * 2;
// });
// console.log(doubleNumbers);

// const evetNumbers = numbers.filter((num) => num % 2 === 0);
// console.log(evetNumbers);

// const reduceMethod = numbers.reduce((acc, currentVakues) => {
//   return acc + currentVakues;
// }, 0);
// console.log(reduceMethod);
// const sortMethod = numbers.sort();
// console.log(sortMethod);

// const findScoreWith646 = numbers.find((item) => item > 5);
// console.log(findScoreWith646);

// let url = "https://swapi.dev/api/films/";
// async function AsyncgetData() {
//   fetch(url)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("HTTP-Error:" + response.statusText);
//       }
//       return response.json();
//     })
//     .catch((error) => console.log(error));
// }
// AsyncgetData();

// function fetchStarWarsFilms() {
//     const apiUrl = "https://swapi.dev/api/films/";

//     return fetch(apiUrl)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json(); // Parse the response body as JSON
//       })
//       .then((data) => {
//         // Handle the API response data here
//         const films = data.results.map((film) => ({
//           title: film.title,
//           director: film.director,
//           releaseDate: film.release_date,
//         }));

//         // Return the processed film information
//         return films;
//       })
//       .catch((error) => {
//         console.error("Fetch Error:", error);
//       });
//   }

//   // Call the function and work with the resolved promise
//   fetchStarWarsFilms().then((films) => {
//     console.log("Star Wars Films:", films);
//   });
