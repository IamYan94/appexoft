function displayInfo(vehicle) {
    console.log("Brand: ".concat(vehicle.brand));
    console.log("Year: ".concat(vehicle.year));
    console.log("Speed: ".concat(vehicle.speed, " km/h"));
}
var car = {
    brand: "Toyota",
    year: 2023,
    speed: 180,
    wheels: 4,
};
var motorcycle = {
    brand: "Suzuki",
    year: 2019,
    speed: 360,
    engineType: "V-twin",
};
var bicycle = {
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
