// Code your solution in this file.
// function lowerCaseDrivers(drivers) {
//  const lowercasedrivers = Array.from(drivers, name => name.toLowerCase())
//  return lowercasedrivers
// }

function lowerCaseDrivers(drivers) {
  const lowercasedrivers = drivers.map(
    function (name) {
    return name.toLowerCase()
    } )
  console.log(lowercasedrivers);
  return lowercasedrivers
}
