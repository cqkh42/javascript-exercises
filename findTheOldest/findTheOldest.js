let findTheOldest = function(object) {
  const year = new Date().getFullYear()
  object.sort((a, b) => (a.yearOfDeath || year) - (a.yearOfBirth || year) > (b.yearOfDeath || year) - (b.yearOfBirth || year) ? -1 : 1)
  return object[0]
}

module.exports = findTheOldest
