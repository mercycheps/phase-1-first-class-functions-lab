// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
}
function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
}
function selectDifferentDrivers(drivers, selector) {
    return selector(drivers);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return (fare) => fare * multiplier;
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);