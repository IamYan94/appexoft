interface User {
  name: string;
  age: number;
  gender: string;
  [key: string]: any;
}

const user: User = {
  name: "Yan",
  age: 29,
  gender: "Man",
  hobby: "Gym",
  favoriteMovie: "Сomedies",
};
console.log(`Name: ${user.name}`);
console.log(`Age: ${user.age}`);
console.log(`Gender: ${user.gender}`);
console.log(`Hobby: ${user.hobby}`);
console.log(`Favorite Movie: ${user.favoriteMovie}`);
