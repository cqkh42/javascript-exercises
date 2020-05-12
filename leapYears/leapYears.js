const leapYears = function(year) {
  multipleFour = !(year % 4)
  century = !(year % 100)
  fourCentury = !(year % 400)
  return (multipleFour && !century) || fourCentury
}

module.exports = leapYears
