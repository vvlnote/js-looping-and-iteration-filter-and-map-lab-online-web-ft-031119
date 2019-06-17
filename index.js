// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driver){
    return driver.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(drivers, revenue){
  let list = [];
  list = driversWithRevenueOver(drivers, revenue);
  return list.map(function(item) {
    return item.name;
  })
}

function exactMatch(drivers, {key: value}) {
  return drivers.filter(function(driver) {
    return driver[key] === value;
  })
}