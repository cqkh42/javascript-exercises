function add (a, b) {
	return a + b
}

function subtract (a, b) {
    return a - b
}

function sum (nums) {
  return nums.reduce((total, next) => total + next, 0)
}

function multiply (nums) {
  return nums.reduce((total, next) => total * next, 1);
}

function power(a, b) {
  return a ** b
}

function factorial(a) {
	let total = 1
	for (let i=1; i <= a; ++i) {
		total = total * i
	}
	return total;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
