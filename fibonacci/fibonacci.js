const fibonacci = function(numbers) {
  let first = 1
  let second = 1
  if (numbers < 0) {
    return "OOPS"
  }
  for (i = 0; i < numbers - 2; i++) {
    let t = first + second
    first = second
    second = t
  }
  return second
}

module.exports = fibonacci
