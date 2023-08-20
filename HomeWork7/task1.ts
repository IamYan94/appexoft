interface Car {
  brand: string;
  year: number;
  speed: number;
  wheels: number;
}

interface Motorcycle {
  brand: string;
  year: number;
  speed: number;
  engineType: string;
}

interface Bicycle {
  brand: string;
  year: number;
  speed: number;
  type: string;
}
type Vehicle = Car | Motorcycle | Bicycle;
function displayInfo(vehicle: Vehicle): void {
  console.log(`Brand: ${vehicle.brand}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Speed: ${vehicle.speed} km/h`);
}

const car: Car = {
  brand: "Toyota",
  year: 2018,
  speed: 220,
  wheels: 4,
};

const motorcycle: Motorcycle = {
  brand: "Suzuki",
  year: 2019,
  speed: 360,
  engineType: "V-twin",
};

const bicycle: Bicycle = {
  brand: "Giant",
  year: 2015,
  speed: 35,
  type: "Mountain Bike",
};
console.log("Car Information:");
displayInfo(car);
console.log("\nMotorcycle Information:");
displayInfo(motorcycle);
console.log("\nBicycle Information:");
displayInfo(bicycle);
