// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const lowercasedrivers = drivers.map(function (name) {
  return Object.assign([], name, name.toLowerCase())
  })
  console.log(lowercasedrivers)
}
