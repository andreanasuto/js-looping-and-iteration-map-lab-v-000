// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const lowercasedrivers = drivers.map(function (name) {
  return Array.from(drivers, name => name.toLowerCase() ))
  })
}
