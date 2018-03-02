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
  return lowercasedrivers
}

function nameToAttributes(array) {
  const newobject = array.map( function (name) {
  return Object.assign({}, array, {
  firstName: array.split(' ')[0], lastName: array.split(' ')[1]})
  })
  console.log(newobject);
}
