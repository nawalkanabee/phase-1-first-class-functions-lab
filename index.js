
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];
const returnFirstTwoDrivers = (array) => {
  return array.slice(0, 1);
};
console.log(returnFirstTwoDrivers(drivers));
const returnLastTwoDrivers = (array) => {
  return array.slice(-2);
};
console.log(returnLastTwoDrivers(drivers));
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(selectingDrivers[0], drivers);


const fareDoubler = createFareMultiplier(2);
console.log(fareDoubler);
const fareTripler = createFareMultiplier(3);
console.log(fareTripler);

const selectDifferentDrivers = function (arr, x) {
  return x(arr);
};