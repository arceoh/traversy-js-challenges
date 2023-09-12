function analyzeCarMileage(cars) {
  //   averageMileage: 23333.33,
  //   highestMileageCar: { make: "Honda", model: "Civic", year: 2019, mileage: 30000 },
  //   lowestMileageCar: { make: "Ford", model: "Mustang", year: 2021, mileage: 15000 },
  //   totalMileage: 70000

  const totalMileage = parseFloat(
    cars
      .reduce((accumulator, car) => {
        return (accumulator = accumulator + car.mileage);
      }, 0)
      .toFixed(2)
  );

  const averageMileage = parseFloat((totalMileage / cars.length).toFixed(2));

  const sortedByMilage = cars.sort((a, b) => {
    return a.mileage - b.mileage;
  });

  const lowestMileageCar = sortedByMilage.at(0);
  const highestMileageCar = sortedByMilage.at(-1);

  return { totalMileage, averageMileage, lowestMileageCar, highestMileageCar };
}

module.exports = analyzeCarMileage;
